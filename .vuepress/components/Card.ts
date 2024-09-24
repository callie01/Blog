interface typeCard {
  title: string;
  icon: string;
  link: string;
  remark: string;
}

export const cardList: typeCard[] = [
  {
    title: "天空之城",
    icon: "",
    link: "https://www.skypixel.com",
    remark: "全球航拍爱好者和专业摄影师的社交平台",
  },
  {
    title: "ToopBook",
    icon: "",
    link: "https://topbook.cc/overview",
    remark: "高效生活视频书",
  },
  {
    title: "今日热榜",
    icon: "",
    link: "https://tophub.today",
    remark: "网站2",
  },
  {
    title: "全历史",
    icon: "",
    link: "https://www.allhistory.com",
    remark: "网站2",
  },
  {
    title: "无水印高清壁纸",
    icon: "",
    link: "https://wall.alphacoders.com",
    remark: "网站2",
  },
];

export function cardInfo() {
  const name = "reco";

  return { name };
}
