# Thrust Land Proto

纯网页最小玩法验证：可切换机体（方块多喷口 / 细长单喷口）+ 单指喷气，验证「按住调姿 → 落地」手感。

**无 Unity / 无美术 / 无关卡 / 无广告。** 与 Sort 工程完全独立。

当前版本：**v8**

## 可玩

- **GitHub Pages**：https://ninja9998877.github.io/thrust-land-proto/
- 本地：浏览器直接打开 `index.html`
- 备用：https://raw.githack.com/ninja9998877/thrust-land-proto/main/index.html

## v8 要点

- **禁长按干扰喷气**（画布 / 游戏区）：`user-select: none`、`-webkit-user-select`、`-webkit-touch-callout: none`；`contextmenu` / `selectstart` preventDefault（右上参数板除外）；`touch-action: none` 保留
- 继承 v7：去冷却、仅单指、方块多喷口 / 细长单喷口可切换（切换复位）、燃料有限、开局随机倾角

## 操作

| 输入 | 作用 |
|------|------|
| 单指按住并拖动 | 绑定最近喷口并喷气（可在底栏喷气区） |
| 鼠标左键拖动 | 同上（右键无效） |
| 右上「方块·多喷口 / 细长·单喷口」或 `1` / `2` | 切换机体并复位 |
| `R` 或右上角「复位」 | 回到约 3000 m、随机倾角、燃料加满 |

橙色线=排气，青色线=对机体的力。

## 参数（右上角）

- **推力**（默认 90）：单口推力大小
- **偏角°**（默认 60）：相对机体向下轴的最大偏转
- **重力**（默认 55）
- **阻尼**（默认 0.35）：线速度阻尼

## 文件

- `index.html` — 单页自含（Canvas 2D + 简易刚体），无构建、无依赖

## 成功标准

打开即可玩；可切换两种机体试手感；自由落体带随机倾角；单指控姿；燃料条随喷气下降。
