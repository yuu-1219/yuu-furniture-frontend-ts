import { FaBoxes, FaCouch } from "react-icons/fa";
import { MdHotel, MdKingBed, MdLightbulbOutline, MdKitchen, MdDesk } from "react-icons/md";
import { GiBasket, GiKnifeFork, GiShower, GiRolledCloth, GiTable, GiFlowerPot } from "react-icons/gi";

export const categories = [
  // { categoryId: "all_furniture", categoryLabel: "全ての商品" },
  {
    categoryId: "storage_furniture", categoryLabel: "収納家具", icon: FaBoxes,
    description: "さまざまなスペースで有効活用できる収納アイテムが揃っています。大切なアルバムや工具まで、整理整頓が簡単に。限られたスペースを最大限に活用することで、ライフスタイルにもっと楽しみが広がります。"
  },
  {
    categoryId: "small_storage", categoryLabel: "小物収納", icon: GiBasket,
    description: "スウェーデンのデザイン哲学を基に、シンプルでありながら機能的。クリアタイプの収納ボックスをはじめ、あらゆるニーズに応える豊富なバリエーションをご用意しています。スマートな収納で、衣替えの服から季節外のスポーツ用品まで、すべてが整然と収まり、毎日がもっとスムーズに。"
  },
  {
    categoryId: "sofas・armchairs", categoryLabel: "ソファ＆パーソナルチェア", icon: FaCouch,
    description: "さまざまなデザインやタイプのものから、お気に入りのソファを見つけてください。"
  },
  {
    categoryId: "textiles", categoryLabel: "クッション&寝具", icon: MdKingBed,
    description: "あなたらしい空間づくりの秘訣は、テキスタイルにあります。お気に入りの色合いのラグや、こだわりの手作りカーテンが、心地よいくつろぎの時間を演出してくれます。季節や気分に合わせてベッドリネンを替えるような手軽さで、暮らしに新鮮な彩りと温もりのある活気をプラスできます。"
  },
  {
    categoryId: "beds・mattresses", categoryLabel: "ベッド・マットレス", icon: MdHotel,
    description: "モダンでスタイリッシュなデザインから、温かみのあるトラディショナルなスタイルまで。また、コンパクトな1人用から、ゆったりとした2人用まで、様々なサイズをお選びいただけます。"
  },
  {
    categoryId: "tables・chairs", categoryLabel: "テーブル・チェア", icon: GiTable,
    description: "北欧テイストのスタイリッシュなものからモダンなデザインのテーブルセット、ゆったりくつろげるテーブル＆チェア、省スペースに便利な折りたたみテーブルなど、さまざまなライフスタイルやインテリアにマッチする組み合わせが見つかるはずです。"
  },
  {
    categoryId: "desk・deskchairs", categoryLabel: "デスク・チェア", icon: MdDesk,
    description: "デザイン性と機能性に優れたデスクやデスクチェアを、お手頃な価格で豊富に取り揃えています。小さなスペースにもぴったりなコンパクトタイプから、広々とした作業スペースを確保できる大型デスクまで、あなたのワークスタイルやお部屋のレイアウトにフィットする一台が見つかるはずです。"
  },
  {
    categoryId: "lighting", categoryLabel: "照明", icon: MdLightbulbOutline,
    description: "見上げても見回しても、目を凝らす必要はありません。照明は、あらゆる場所に設置できます。読書や調理する時、失せ物を探す時など、日常のあらゆる場面で私たちの生活をサポートします。"
  },
  {
    categoryId: "rugs・mats", categoryLabel: "ラグ・カーペット", icon: GiRolledCloth,
    description: "一日の最初の一歩も、家の中を動き回るときも、ラグが部屋に心地よさをプラスします。"
  },
  {
    categoryId: "decoration", categoryLabel: "インテリア雑貨", icon: GiFlowerPot,
    description: "北欧風、ナチュラル、シンプルモダン。好みに合わせて選べる豊富なスタイルと、日常に寄り添うアイテムで、お部屋づくりをもっと自由に。"
  },
  // {
  //   categoryId: "kitchenware・tableware", categoryLabel: "調理器具・食器", icon: GiKnifeFork,
  //   description: "毎日使うものだから、機能もデザインも妥協したくない。手にした瞬間から愛着がわく、あなたのキッチンにぴったりの一品が見つかります。"
  // },
  // {
  //   categoryId: "bathroom_products", categoryLabel: "洗面所収納・バスタオル", icon: GiShower,
  //   description: "賢くて楽しいアクセサリーを上手に使えば、バスルームを簡単にパーソナライズし、きちんと整理整頓して時間も節約できます。シャワーバスケットや吸盤付きフック、ソープディスペンサー、おしゃれなバスケット、きれいで実用的な小物入れなど、各種アクセサリーをさまざまなデザインや色からお選びいただけます。"
  // },
  // {
  //   categoryId: "kitchen・appliances", categoryLabel: "キッチン収納", icon: MdKitchen,
  //   description: "探しているのは、自由にカスタマイズできるフルカスタマイズのシステムキッチン？ それとも、シンプルだけれど必要な機能が全部そろった、1日で設置できるキッチン？ あなたのニーズや好きなスタイル、予算に合った理想のキッチンがきっと見つかります。"
  // }
];