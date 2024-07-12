export const navItems = [
  { name: '关 于', link: '#about' },
  { name: '项 目', link: '#projects' },
  { name: '服 务', link: '#testimonials' },
  { name: '联 络', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      '团 队 协 作 与 工 程 开 发 交 流 的 利 器，高 自 由 度 满 足 各 类 用 户 通 信 需 求',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: '敏 捷 的 跨 时 区 通 信，低 延 迟 的 响 应 速 度',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: '团 队 技 术 栈',
    description: '我们不断打磨',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: '集结技术爱好者，对开发充满热情。',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: '正在着手拓展频道功能性，"讨论区" 频道模块开发中，敬请期待！',
    description: '内幕消息',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: '想加入我们的团队为这个项目贡献力量?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Harmony - 在线即时通讯平台',
    des: '一个多功能的即时通讯平台，它允许用户创建专属的服务器，并提供细致的权限管理功能，包括服务器拥有者、管理员和普通成员的角色定义。用户可以生成邀请链接来扩展服务器的成员，以及在服务器内创建多种类型的频道，如文字、语音和视频频道，以满足不同形式的交流需求。此外，平台支持发送emoji、图片和PDF文件，并具备在线预览PDF的功能。它还提供公共频道和私人聊天功能，以及屏幕共享的能力，使得沟通更加灵活和高效。',
    img: 'https://t.tutu.to/img/mz69z',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/c.svg'],
    link: 'https://github.com/CCNUPracticalTraining-530-2/Harmony',
  },
  {
    id: 2,
    title: 'Harmony | 主页',
    des: '展示了平台的核心功能和优势，如创建专属服务器、细致的权限管理、多样化的频道选项以及丰富的交流工具，还通过直观的布局和吸引人的视觉元素，鼓励用户探索和加入社区。此外，主页还可能包含实时反馈和用户交互功能，如屏幕共享演示，进一步增强了用户参与度和平台的吸引力。',
    img: 'https://t.tutu.to/img/mzFee',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg'],
    link: 'https://github.com/CCNUPracticalTraining-530-2/HomePage',
  },
  {
    id: 3,
    title: 'Harmony | 项目后端',
    des: '一个强大的服务架构，它通过精心设计的APIs支持前端应用的所有功能，包括服务器和频道的创建、权限管理、内容分享以及即时通讯。后端使用高效的数据库管理系统来存储用户数据、交流记录和媒体文件，同时确保数据的安全性和隐私性。它还具备强大的扩展性和可靠性，能够处理高并发请求，保证服务的稳定性和响应速度，为用户提供流畅和安全的通讯体验。',
    img: 'https://th.bing.com/th/id/OIP.lHtcv9BjzEIE38LqM8QuGwHaD-?rs=1&pid=ImgDetMain',
    iconLists: [],
    link: 'https://github.com/CCNUPracticalTraining-530-2/harmony-BE',
  },
];

export const testimonials = [
  {
    quote:
      '这个平台彻底改变了我们的团队沟通方式。它的服务器创建和管理功能非常直观，而且权限管理非常细致，让我们能够确保信息安全。频道多样性和沟通工具的丰富性让团队协作更加高效。',
    name: '张XX',
    title: '项目经理',
  },
  {
    quote:
      '我非常喜欢这个平台的即时通讯功能，尤其是它的屏幕共享和在线预览PDF文件的能力，这让我在远程工作时也能保持高效率。',
    name: '李XX',
    title: '设计师',
  },
  {
    quote:
      '作为一个经常需要与不同团队协作的自由职业者，我发现这个平台的邀请链接和频道创建功能非常实用。它让我能够快速搭建起项目交流空间，与团队成员无缝对接。',
    name: '王XXX',
    title: '自由职业者',
  },
  {
    quote:
      '这个平台的界面设计简洁现代，使用起来非常流畅。发送emoji和图片让日常交流更加生动有趣，而且公众频道和私人聊天的区分也让我能够根据不同的交流需求选择合适的方式。',
    name: '赵XX',
    title: '市场专员',
  },
];

export const companies = [
  {
    id: 1,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 2,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 3,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: '前端工程师',
    desc: '协助使用 React.js 开发基于 Web 的平台，增强交互性。',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: '后端工程师',
    desc: '构建和维护软件系统服务器端，精通数据库管理、服务器逻辑处理和应用程序接口(API)开发，确保系统的稳定性、性能和安全性。',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'UI 设计师',
    desc: '专注于创造直观、美观且用户友好的界面和交互体验的创意，精心设计视觉元素和布局，提升产品的可用性和吸引力。',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: '项目文档经理',
    desc: '负责管理和维护项目文档，确保所有项目资料的准确性、完整性和可访问性，以支持团队协作、决策制定和项目交付。',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
];
