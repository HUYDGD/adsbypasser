_.register({
  rule: {
    host: /^fastpic\.ru$/,
    path: /^\/view\//,
  },
  async ready () {
    const i = $('#picContainer img');
    await $.openImage(i.src, {
      // prevent loopback if image not found
      referer: true,
    });
  },
});

_.register({
  rule: {
    host: /^fastpic\.org$/,
    path: /^\/view\//,
  },
  async ready () {
    const i = $('#picContainer img');
    await $.openImage(i.src);
  },
});
