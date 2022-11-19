type ModifyCodeParams = {
  greedRate: string;
  goldenEggRate: string;
};

export function modifyCode(code: string, params: ModifyCodeParams) {
  return code
    .replaceAll(
      /'greed':([\d\.x]+),'curse':/g,
      `'greed':$1*${params.greedRate},'curse':`
    )
    .replaceAll(
      /','value':([\dx\.]+)\}/g,
      `','value':$1*${params.goldenEggRate}}`
    )
    .replaceAll(/\+\+,void 0x0===/g, `+=${params.goldenEggRate},void 0x0===`);
}
