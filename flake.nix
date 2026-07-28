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
                  nodejs-slim
                  lessc
                  jsdoc
                  eslint

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
                      "module": "ESNext",
                      "target": "ESNext",
                      "paths": {
                        "@client/*": ["${foundryModulePath}/client/*"],
                        "@common/*": ["${foundryModulePath}/common/*"]
                      }
                    },
                    "exclude": ["node_modules", "**/node_modules/*"],
                    "include": [
                    	"metallurgent0th",
                    	"${foundryModulePath}/client.mjs",
                    	"${foundryModulePath}/client/global.d.mts",
                    	"${foundryModulePath}/common/global.d.mts"
                    ],
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
