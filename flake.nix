{
  description = "A Flake for developing Foundry vtt System development";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    foundryvtt.url = "github:reckenrode/nix-foundryvtt";
  };

  outputs =
    inputs@{
      # self,
      ...
    }:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem =
        {
          pkgs,
          # lib,
          # system,
          # config,
          ...
        }:
        {
          # _module.args.pkgs = import self.inputs.nixpkgs {
          #   inherit system;
          #   config.allowUnfreePredicate =
          #     pkg:
          #     builtins.elem (lib.getName pkg) [
          #     ];
          # };

          devShells = {
            default = pkgs.mkShell {
              nativeBuildInputs = with pkgs; [
                nodejs-slim
                lessc
              ];
              # env = {
              #   DOTNET_BIN = "${pkgs.dotnetCorePackages.sdk_10_0}/bin/dotnet";
              # };
            };
          };

          packages = {
            default = inputs.foundryvtt.packages.${pkgs.system}.foundryvtt_12;

          };
        };
    };
}
