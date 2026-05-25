{ pkgs, perSystem, ... }:
perSystem.devshell.mkShell
  {
    packages = with pkgs; [
      nodejs_24
      pnpm_11
    ];
  }

  pkgs.mkShell
  {

    shellHook = ''
      export PS1="(homepage) $PS1"
    '';
  }
