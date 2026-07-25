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
            	foundryPath = inputs.foundryvtt.packages.${pkgs.system}.foundryvtt_14;           in
            pkgs.mkShell {
              nativeBuildInputs = with pkgs; [
                #Tooling
                nodejs-slim
                lessc

                #Language Servers
                typescript-language-server
                vscode-css-languageserver
                superhtml

                #Formatters
                prettier
              ];

              shellHook = ''
              		alias LessCompile="lessc ./metallurgent0th/less/metallurgent.less ./metallurgent0th/metallurgent.css"

              		cat << EOF > jsconfig.json
              		{
									  "compilerOptions": {
									    "module": "ES2022",
									    "target": "ES2022",
									    "paths": {
									      "@client/*": ["${foundryPath}/lib/node_modules/foundryvtt/client/*"],
									      "@common/*": ["${foundryPath}/lib/node_modules/foundryvtt/common/*"]
									    }
									  },
									  "exclude": ["node_modules", "**/node_modules/*"],
									  "include": ["**/metallurgent-system.mjs", "${foundryPath}/lib/node_modules/foundryvtt/*"],
									  "typeAcquisition": {
									    "include": ["jquery"]
									  }
									}
              	'';
            };
          };

          packages = {
            default = inputs.foundryvtt.packages.${pkgs.system}.foundryvtt_14;
          };
        };
    };
}
