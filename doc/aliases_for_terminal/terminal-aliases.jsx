{
  /* Aliases for git bash */
}
{
  /* using https://transform.tools/html-to-jsx */
}

import toast from "react-hot-toast";

const aliasesText = `
=================================================================================
#       ALIASES
=================================================================================

# ---------------------------------------------------------------------------------
# GAC: Alt+G = Pre-fill commit message | Alt + G
# ---------------------------------------------------------------------------------
git_add_commit_prefill() {
  READLINE_LINE="git add . && git commit -m ''"
  READLINE_POINT=28
}
bind -x '"\\eg":git_add_commit_prefill'

# ---------------------------------------------------------------------------------
# GAC: Typed command \`gac\`
# ---------------------------------------------------------------------------------
gac() {
  git add .
  echo "Enter commit message:"
  read -r msg
  git commit -m "$msg"
}

# ---------------------------------------------------------------------------------
# GACP: Alt+V or type \`gacp\`| Alt + V
# ---------------------------------------------------------------------------------
gacp() {
  read -e -p "Commit message: " msg && git add . && git commit -m "$msg" && git push
}
bind -x '"\\ev":gacp'

# ---------------------------------------------------------------------------------
# Git alias - git push - \`gp\`
# ---------------------------------------------------------------------------------
alias gp='git push'

# ---------------------------------------------------------------------------------
# GCMM: Merge current branch into \`main\` | Alt + M
# ---------------------------------------------------------------------------------
gcmm() {
  current_branch=$(git symbolic-ref --short HEAD)

  if [ "$current_branch" = "main" ]; then
    echo "You're already on 'main'. Cannot merge 'main' into itself."
    return 1
  fi

  echo "Merging '$current_branch' into 'main'..."
  git checkout main && git merge "$current_branch"
}
bind -x '"\\em":gcmm'

# ---------------------------------------------------------------------------------
# NRD: npm run dev | Alt + D
# ---------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------
# VTD: execute script to create vite project w.tailwind/daisyUI
# ---------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------
# GHRC: gh repo create --remote | Alt + R
# ---------------------------------------------------------------------------------
# execute gh repo create <name> --private --source=. --remote=origin --push
ghrc() {
  read -e -p "Repo Name: " msg && gh repo create "$msg" --private --source=. --remote=origin --push
}
bind -x '"\\er":ghrc'

=================================================================================
#       End ALIASES
=================================================================================
`;

// ---------------------------------------------------------------------------------

const TerminalAliases = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(aliasesText);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="w-full px-4 py-8 max-w-screen-lg mx-auto">
      <div className="text-center flex flex-col items-center space-y-4 mb-6">
        <h2 className="text-xl">Aliases for terminal / git bash</h2>
        <h4>
          <code className="text-accent font-mono whitespace-pre">
            sudo nano ~/.bashrc && source ~/.bashrc
          </code>
        </h4>
        <button
          onClick={handleCopy}
          className="btn text-emerald-600 hover:bg-emerald-950 hover:text-success"
        >
          Copy All
        </button>
      </div>

      <pre className="p-4 text-sm text-green-500 bg-stone-900 rounded-lg overflow-x-auto w-full max-w-full text-left">
        <code className="font-mono whitespace-pre">{aliasesText}</code>
      </pre>
    </div>
  );
};

export default TerminalAliases;
