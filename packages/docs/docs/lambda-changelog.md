---
id: lambda-changelog
title: Changelog
slug: /lambda/changelog
---

Keep track of changes to the APIs of Remotion Lambda here.

## How to upgrade

1. Get the newest version from the `#lambda` Discord channel.
1. Upgrade all packages to the newest version (`@remotion/lambda`, but also `remotion`, `@remotion/cli` etc.)
1. Remove all existing lambdas: `npx remotion-lambda functions ls` and then `npx remotion-lambda functions rm <function-name>`
1. Redeploy your function: `npx remotion lambda functions deploy`
1. Migrate according to the changelog below:

## August 6th, 2021

Version hash: `2.3.0-alpha.0d814aad`

- Node.JS API is now fully documented
- Lambda function `name` was renamed to `functionName`
- Fix `remotion lambda policies validate` wrongly indicating that the `iam:GetUser` permission was not given
- `getDeployedLambdas()` was renamed to `getFunctions()`
- `getFunctionVersion()` was removed, use `getFunctionInfo()`
- New function `estimatePrice` is now available.
- Parameter `memorySize` was renamed to `memorySizeInMb` globally.
- New function [`renderStillOnLambda()`](/docs/lambda/renderstillonlambda) available for rendering a still image.
- New command [`npx remotion lambda still`](/docs/lambda/cli) for rendering a still image
- React component lifecycle change: When the component is mounting, initially `useCurrentFrame()` returns the frame that is initially being rendered, rather than just `0` and then updating to the frame that will be initially rendered.
- Includes all the changes from Remotion 2.2

## July 14th, 2021

- Emojis are now rendered using the Noto Color Emoji font
- Better price calculation
- Cleanup of S3 buckets after rendering

## July 6th, 2021

- You can now use `npx remotion lambda` instead of `npx remotion-lambda`.
- CLI supports the `-y` ('yes') flag for skipping confirmation of destructive commands.
- Stability, memory management and reliability improved
- Lambda runtime and Region selection now documented
- `renderVideoOnLambda()` and `getRenderProgress` now documented.
- `deployLambda()` has been renamed to `deployFunction()`