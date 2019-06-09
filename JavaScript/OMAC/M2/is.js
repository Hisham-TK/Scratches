// add sites from list and insert them into the app
// input_btn = $('[placeholder="example.com"]')[0];
// add_btn = $('button#btn_addDomain')[0];
// list = $('.show-domains')[0].innerText.split` `;
// [...new Set(`Copy URLs`.split`\n`.filter(v => /^http/.test(v)).map(v => v.replace(/https?:\/\/|www.|(\w+\.)(?=\w+\.\w+)|\/.*/g, '')))].forEach((v, i) => setTimeout(() => (input_btn.value = v, !list.includes(v) && add_btn.click()), i * 3e2));

// check if all sites is valid
// Object.entries($('.show-domains')[0].innerText.split` `.reduce((p, c) => (p[c] = (p[c] || 0) + 1) && p, {})).filter(v => v[1] > 1 || /^\.|^\w+\.\w{6,}$|[?=]|(\w+\.){2}\w+/.test(v[0]));
