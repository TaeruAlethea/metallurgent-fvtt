{
  description = "A Flake for developing Foundry vtt System development";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    foundryvtt.url = "github:reckenrode/nix-foundryvtt";
  };

  outputs =
    inputs@{
      ...
    }:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem =
        {
          pkgs,
          ...
        }:
        {
          devShells = {
            default =
              let
                foundryPath = inputs.foundryvtt.packages.${pkgs.system}.foundryvtt_14;
                foundryModulePath = "${foundryPath}/lib/node_modules/foundryvtt";
              in
              pkgs.mkShell {
                nativeBuildInputs = with pkgs; [
                  #Tooling
                  nodejs

                  #Language Servers
                  typescript
                  typescript-language-server
                  vscode-css-languageserver
                  superhtml

                  #Formatters
                  prettier
                  dprint
                ];

                shellHook = ''
									flake_store_root="${toString ./.}"
									if repo_root="$( \
									  2>/dev/null git rev-parse --show-toplevel \
									)"; then
									  flake_root="$repo_root"
									else
									  flake_root="$flake_store_root"
									fi
									export FLAKE_ROOT="$flake_root"
                	
                	mkdir -p $FLAKE_ROOT/foundry
									ln -s -f "${foundryModulePath}/tsconfig.json" "$FLAKE_ROOT/foundry"
									ln -s -f "${foundryModulePath}/client" "$FLAKE_ROOT/foundry"
									ln -s -f "${foundryModulePath}/common" "$FLAKE_ROOT/foundry"
									ln -s -f "${foundryModulePath}/public/lang" "$FLAKE_ROOT/foundry"
									'';
              };
          };

          packages = {
            default = inputs.foundryvtt.packages.${pkgs.system}.foundryvtt_14;
          };
        };
    };
}
