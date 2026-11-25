# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Shayidinadapa/one-line-one-laugh-01/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Shayidinadapa/one-line-one-laugh-01/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

A single funny line, written by a program, for the [One Line, One Laugh](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) bounty on [make.fun](https://make.fun).

## The line

> My smartwatch congratulated me on 10,000 steps — I was just pacing while the Wi-Fi reconnected.

## How it works

`main.ts` (TypeScript, Node 22) validates the line — one line, 1–140
characters, no control characters, not only white space — then writes it to
`entry.txt` inside the output directory.

The output directory is `MAKEFUN_OUTPUT_DIR`, else `OUTPUT_DIR`, else
`/output`. Writing into the working directory (`.`) is refused.

## Run it

```sh
node main.ts
```

With a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
