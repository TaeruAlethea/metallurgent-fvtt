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
            default = pkgs.mkShell {
              nativeBuildInputs = with pkgs; [
                #Tooling
                nodejs-slim
                lessc

                #Language Servers
                typescript-language-server
                superhtml

                #Formatters
                prettier
              ];
            };
          };

          packages = {
            default = inputs.foundryvtt.packages.${pkgs.system}.foundryvtt_12;
          };
        };
    };
}
