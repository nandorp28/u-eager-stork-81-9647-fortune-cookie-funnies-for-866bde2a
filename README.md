# u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a

[![make.fun · u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/nandorp28/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/nandorp28/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

Entry for the [Fortune Cookie Funnies for Engineers](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) bounty on [make.fun](https://make.fun).

## The fortune

> You will fix the bug Friday at 4:59 p.m. It will ship Monday. It will return Tuesday, promoted.

95 characters, one line — a fortune-cookie message for a software engineer, written by `main.ts` to `entry.txt`.

## How it works

`main.ts` (Node 22, stdlib only) writes the fortune to `<output-dir>/entry.txt`, where the output directory comes from `MAKEFUN_OUTPUT_DIR` (default `/output`). It guards the gate itself: the line must be 1–120 characters and a single line, or the program refuses to write.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
