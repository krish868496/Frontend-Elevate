

```markdown
# 🌱 Semantic Commits Guide

This guide explains **Semantic Commit Messages** – what they are, why we use them, and how to write them properly.

---

## 🚀 What are Semantic Commits?

Semantic commits follow a **structured format** that makes it easier to understand the purpose of a commit at a glance. This helps teams:
- Improve collaboration
- Automate changelogs and releases
- Maintain cleaner Git history

The format is:

```

<type>(optional scope): <description>

```

Optional sections:
- `scope`: Area of the codebase (e.g., `api`, `auth`, `ui`)
- `description`: Short, clear summary

---

## 🏷️ Commit Types

| Type       | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| **feat**   | ✨ New feature                                          |
| **fix**    | 🐛 Bug fix                                             |
| **docs**   | 📝 Documentation-only changes                           |
| **style**  | 💅 Code style (formatting, no logic change)             |
| **refactor** | 🔨 Code changes that don't fix bugs or add features   |
| **perf**   | ⚡ Performance improvements                             |
| **test**   | ✅ Adding or updating tests                             |
| **chore**  | 🔧 Maintenance tasks (build tools, configs, etc.)       |
| **ci**     | 🛠️ CI/CD configuration changes                          |
| **build**  | 📦 Build system or dependency updates                   |
| **revert** | 🔙 Reverts a previous commit                            |

---

## 📝 Examples

```

feat(auth): add login API endpoint
fix(api): handle 500 errors in user service
docs(readme): update installation steps
style(ui): format button component with Prettier
refactor(user): simplify validation logic
chore(deps): upgrade to Next.js 14

```

---

## 🔧 Tools for Semantic Commits

| Tool                  | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| **Husky**             | Run Git hooks (e.g., lint commit messages)        |
| **commitlint**        | Lint commit messages to enforce semantic format   |
| **semantic-release**  | Automate versioning & changelog generation        |
| **Conventional Commit (VSCode Extension)** | Autocomplete & validate commits locally |

---

## 🌐 Learn More

- [Conventional Commits Spec](https://www.conventionalcommits.org/en/v1.0.0/)
- [Semantic Release](https://semantic-release.gitbook.io/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)


```

---

