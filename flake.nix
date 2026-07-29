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
                  typescript
                  typescript-language-server
                  vscode-css-languageserver
                  superhtml

                  #Formatters
                  prettier
                ];

                shellHook = ''
                	mkdir -p ./foundry
									ln -s -f "${foundryModulePath}/tsconfig.json" "./foundry"
									ln -s -f "${foundryModulePath}/client" "./foundry"
									ln -s -f "${foundryModulePath}/common" "./foundry"
									ln -s -f "${foundryModulePath}/public/lang" "./foundry"
									
	            		alias LessCompile="lessc ./metallurgent0th/less/metallurgent.less ./metallurgent0th/metallurgent.css"

              		cat << EOF > tsconfig.json
                  {
                    "compilerOptions": {
											// Cargo Cult for Typescript
											"declaration": true,
											"emitDeclarationOnly": true,
											"outDir": ".tsvoid",
											"composite": true,

											// Actual Config
                      "target": "esnext",
                      "lib": ["dom", "esnext"],
                      "allowJs": true,
                      "checkJs": true,
                      "moduleResolution": "bundler",
                      "esModuleInterop": true,
                      "strict": true,
                      "skipLibCheck": true,
                      "paths": {
                        "@client/*": ["./foundry/client/*"],
                        "@common/*": ["./foundry/common/*"]
                      }
                  	},
                    "exclude": ["**/node_modules/*", "**/dist/*"],
                    "include": [
                    	"./metallurgent0th/**/*.mjs",
                    	"./metallurgent0th/**/*.d.ts",
                    	"./foundry/client/client.mjs",
                    	"./foundry/**/*.d.mts"
                    ],
                    "typeAcquisition": {
                      "include": ["jquery"]
                    },
                    "references": [{
                    	"path": "./foundry"
                    }]
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
