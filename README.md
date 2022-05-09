# Hot reload dont work when you use docker

used as a template: <https://github.com/vercel/next.js/tree/canary/examples/with-docker>

## Steps to reproduce

1. Download repo <https://github.com/GorlikItsMe/next-js-docker-swc-hot-reload-dont-work>
2. `docker-compose up --build`
3. Make a change in `/src/pages/index.js`
4. Hot reload doesn't work
5. Manually refresh page also don't work

## Fix

rename file `____next.config` to `next.config`.

Hot reload starts works but it use webpack to do it (and its slow).

Is there a way to use SWC?
