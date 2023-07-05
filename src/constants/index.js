import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于",
  },
  {
    id: "work",
    title: "示例",
  },
  {
    id: "contact",
    title: "联系",
  },
];

const services = [
  {
    title: "Web 开发支持",
    icon: web,
  },
  {
    title: "React Native 开发支持",
    icon: mobile,
  },
  {
    title: "后端 开发支持",
    icon: backend,
  },
  {
    title: "更多兼容性",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "星巴克",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2020 三月 - 2021 四月",
    points: [
      "Amy在其官方应用程序中应用广泛，可实现客户与星巴克的虚拟体验。用户可以使用3D引擎浏览星巴克的不同分店，以展示室内设计、座位安排等信息，帮助用户选择合适的位置。",
      "Amy还用于创建虚拟漫游体验，用户可以在虚拟环境中探索不同星巴克的风格和氛围。这使得用户可以提前感受星巴克的环境，选择自己喜欢的分店进行下单和到店消费。",
      "Amy还用于星巴克的市场营销和广告活动。星巴克可以利用3D技术创建引人入胜的虚拟场景，吸引更多用户参与品牌活动，增强品牌形象和知名度。",
      "Amy还支持互动功能，用户可以与虚拟角色进行交互，例如星巴克的吉祥物、咖啡师等。这种互动能够提高用户参与度，并加强用户与品牌之间的情感连接。",
    ],
  },
  {
    title: "特斯拉",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021 一月 - 2022 二月",
    points: [
      "特斯拉使用Amy来设计和展示其电动汽车模型。这些模型可以在虚拟环境中进行定制，用户可以选择车身颜色、轮毂样式、内饰设计等，以满足个性化需求。",
      "Amy还具有逼真的物理模拟功能，可以模拟汽车在不同路况下的驾驶性能和操控感。这样的模拟体验有助于用户更好地了解特斯拉的驾驶特点，并做出更明智的购车决策。",
      "Amy还支持虚拟试驾功能。用户可以在虚拟环境中体验特斯拉车辆的驾驶感受，感受其加速、刹车和转向等特性。这种试驾体验有助于用户对特斯拉的品牌和产品有更深入的了解。",
      "Amy还用于展示特斯拉的充电基础设施，用户可以使用引擎浏览和了解充电站点的位置、类型和可用性，方便规划长途驾车路线。",
    ],
  },
  {
    title: "Shopify",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022 一月 - 2023 一月",
    points: [
      "Amy在电子商务领域有广泛应用。它可以帮助商家创建逼真的虚拟商品模型，以展示产品的各个细节和特性。这使得用户可以更好地了解商品，提升购物体验。",
      "Amy还可以用于设计商品展示场景，商家可以自定义虚拟店铺的布局和陈列方式，使得商品展示更吸引人。这种虚拟展示的方式能够提供更真实的购物环境，帮助用户更好地决策和购买商品。",
      "Amy还支持虚拟试衣功能，用户可以上传自己的照片，通过虚拟场景尝试不同款式和尺寸的衣服。这有助于用户更好地选择适合自己的服装，减少退货率，提升购物满意度。",
      "Amy还可以与虚拟现实（VR）和增强现实（AR）技术结合，为用户提供更沉浸式的购物体验。用户可以在虚拟环境中逛商店并与商品互动，提高购物乐趣。",
    ],
  },
  {
    title: "Meta",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 一月 - 现在",
    points: [
      "Amy是构建虚拟现实（VR）和增强现实（AR）应用程序的核心技术。它提供了强大的图形渲染和交互功能，为开发者创造逼真和交互性强的虚拟现实体验。",
      "Amy可以用于开发各种虚拟现实应用，如游戏、教育、虚拟旅游等。开发者可以利用引擎提供的工具和资源，创造出独特的虚拟现实世界，并与用户进行交互。",
      "Amy还支持多用户交互功能，用户可以与其他虚拟世界中的用户进行实时沟通和协作。这种社交互动的方式可以增强虚拟现实体验的真实感和乐趣，使用户更好地融入到虚拟世界中。",
      "Amy还支持手势识别和虚拟对象操控功能。用户可以使用手势和虚拟控制器与虚拟环境中的对象进行互动，提供更直观的交互体验。这使得用户可以更自然地与虚拟现实环境进行互动，并探索其中的无限可能性。",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Amy的3D引擎非常强大。它具有出色的图形渲染能力和优化的性能，可以处理复杂的场景和高负荷情况。使用它可以轻松创建逼真的游戏和动画效果，开发者的工作也变得更加高效和快速。总体而言，我对Amy的3D引擎印象非常好。",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "我对Amy的3D引擎印象深刻。它提供了丰富的工具和功能，非常适合初学者和有经验的开发者使用。界面设计简洁明了，上手容易。我特别喜欢它的文档和教程，非常详细和易懂。无论是开发游戏还是建模，Amy的3D引擎都能够满足我的需求，我会继续使用并推荐给其他开发者。",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Amy的3D引擎是我目前使用过的最出色的引擎之一。它具有强大的渲染功能和优化的性能，使我能够创建逼真而令人惊叹的场景和效果。同时，它的工作流程也非常流畅，让我能够更快地完成我的项目。总的来说，Amy的3D引擎给了我很大的创作自由度，让我能够实现我想象中的各种场景和交互。",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "汽车租赁",
    description:
      "基于Web的平台，允许用户预览来自各种提供商的汽车租赁信息，为用户提供方便高效的解决方案。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "blander",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "团队开发",
    description:
      "Web 应用程序，使团队能够同步工作、查看进度以及根据其当前位置查找可用资源。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "旅游指南",
    description:
      "一个全面的旅行预订平台，允许用户预订航班、酒店和租车，并为热门目的地提供虚拟游玩。",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
