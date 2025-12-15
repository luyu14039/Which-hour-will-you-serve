import type { Question } from '../types';

export const REALITY_QUESTIONS: Question[] = [
  {
    id: 'r_weekend',
    title: '闲暇时光',
    description: '终于结束了一周的忙碌，周六的下午，没有任何安排，你会倾向于？',
    options: [
      {
        id: 'A',
        text: '钻研一个感兴趣的复杂话题，看纪录片、读专业书或硬核科普',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '大脑的愉悦来自于理解世界的底层逻辑。你渴望光，渴望看清事物的本质。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'B',
        text: '去那家新开的网红餐厅，或者约朋友去酒吧享受美食美酒',
        values: { 'Nectar': 2, 'Grail': 1 },
        flavorText: '唯有感官的满足才是活着的证明。你拥抱欲望，享受生命的热度。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'C',
        text: '去健身房挥洒汗水，或者在家专注于手工、拼装或修理物品',
        values: { 'Forge': 2, 'Edge': 1 },
        flavorText: '流汗和创造让人感到掌控感。你通过改变物质世界来确认自己的存在。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'D',
        text: '拉上窗帘，关掉手机，享受绝对的安静，补觉或发呆',
        values: { 'Moon': 2, 'Winter': 1 },
        flavorText: '世界太吵了。在寂静中，你不需要成为任何人，只需要存在。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'E',
        text: '没有计划，出门随便走走，剪个新发型，或者来一场说走就走的短途游',
        values: { 'Rose': 2, 'Moth': 1 },
        flavorText: '计划总是赶不上变化。你喜欢这种随机性和不确定性，那是自由的味道。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'F',
        text: '去公园、植物园或者爬山，感受大自然的气息',
        values: { 'Scale': 2, 'Nectar': 1 },
        flavorText: '你渴望回归泥土与根系。在自然的脉动中，你找到了久违的宁静。',
        nextQuestionId: 'r_conflict'
      }
    ]
  },
  {
    id: 'r_conflict',
    title: '职场/学业危机',
    description: '你的上级或导师提出了一个明显不合理且强人所难的要求，你的第一反应是？',
    options: [
      {
        id: 'A',
        text: '冷静地列举过往案例、数据或规定，试图从逻辑上证明其不可行',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '理智是你最好的武器。只要逻辑无懈可击，谬误就会不攻自破。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'B',
        text: '表面答应下来，然后寻找规则的漏洞、捷径或者找人代劳',
        values: { 'Knock': 2, 'Moon': 1 },
        flavorText: '门总是关着的，但总有缝隙。你擅长找到那些不为人知的“后门”。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'C',
        text: '把它当成一场战役，直接指出问题，甚至联合其他人一起抗议',
        values: { 'Edge': 2, 'Forge': 1 },
        flavorText: '冲突是检验力量的试金石。你不会退缩，你会战斗到底。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'D',
        text: '为了大局和关系先忍下来，尽力去修补和完成，哪怕自己吃亏',
        values: { 'Scale': 2, 'Heart': 1 },
        flavorText: '维持系统的运转比争论对错更重要。你是那个默默守护、确保持续的人。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'E',
        text: '这太荒谬了，也许是时候考虑跳槽、转专业或者换个环境了',
        values: { 'Moth': 2, 'Rose': 1 },
        flavorText: '树挪死，人挪活。为什么要在一棵树上吊死？蜕变往往始于逃离。',
        nextQuestionId: 'r_social'
      }
    ]
  },
  {
    id: 'r_social',
    title: '社交面具',
    description: '翻看你的朋友圈或社交媒体动态，你发现自己最常发布的内容是？',
    options: [
      {
        id: 'A',
        text: '深度好文、行业分析、书评影评，或者自己的独到见解',
        values: { 'Lantern': 2, 'Sky': 1 },
        flavorText: '你希望你的分享能照亮他人，或者至少展示你清醒的头脑。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'B',
        text: '精修的美食、旅行照、派对现场，或者氛围感十足的自拍',
        values: { 'Grail': 2, 'Nectar': 1 },
        flavorText: '生活需要仪式感，美好的瞬间值得被记录、被凝视、被渴望。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'C',
        text: '转发抽奖、寻找拼单、分享冷门资源或实用的小技巧',
        values: { 'Rose': 2, 'Knock': 1 },
        flavorText: '互联网络是一个巨大的迷宫，而你擅长在其中传递钥匙和机会。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'D',
        text: '“那年今日”、老照片、怀旧金曲，或者对过去事件的感慨',
        values: { 'Secret Histories': 2, 'Scale': 1 },
        flavorText: '过去塑造了现在的我们。记忆是唯一真实的财富，值得反复摩挲。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'E',
        text: '很少发动态，或者设置了三天可见，定期清理痕迹',
        values: { 'Moon': 2, 'Winter': 1 },
        flavorText: '互联网有记忆，但这让你感到不安。沉默是金，遗忘是福。',
        nextQuestionId: 'r_shopping'
      }
    ]
  },
  {
    id: 'r_shopping',
    title: '意外之财',
    description: '如果突然获得了一笔可观的意外之财，你最强烈的冲动是把它花在？',
    options: [
      {
        id: 'A',
        text: '升级电脑硬件、购买最新的生产力工具、器材或软件',
        values: { 'Forge': 2, 'Sky': 1 },
        flavorText: '工欲善其事，必先利其器。这是对未来的投资，为了创造更多价值。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'B',
        text: '一场奢华的旅行，或者买下那个种草很久的名牌包/表/首饰',
        values: { 'Nectar': 2, 'Grail': 1 },
        flavorText: '钱只是换了一种方式陪伴你。快乐、享受和体验才是最重要的。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'C',
        text: '存起来作为备用金，或者买保险、理财，给家人买礼物',
        values: { 'Heart': 2, 'Scale': 1 },
        flavorText: '安全感比什么都重要。你要为未雨绸缪，也要守护身边的人。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'D',
        text: '去买一些绝版的旧书、古董、黑胶唱片或者纪念品',
        values: { 'Secret Histories': 2, 'Moon': 1 },
        flavorText: '这些物品承载着时间的故事。你收藏的不是物品，而是凝固的历史。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'E',
        text: '投资高风险高回报的项目，或者去买彩票，赌一把更大的',
        values: { 'Knock': 2, 'Moth': 1 },
        flavorText: '运气也是实力的一部分。你愿意推开那扇未知的门，看看后面是什么。',
        nextQuestionId: 'r_stress'
      }
    ]
  },
  {
    id: 'r_stress',
    title: '压力释放',
    description: '当感到极度焦虑、压力大到快要崩溃时，你会本能地选择？',
    options: [
      {
        id: 'A',
        text: '去打拳、跑步、剧烈运动，或者玩竞技类游戏发泄',
        values: { 'Edge': 2, 'Forge': 1 },
        flavorText: '将压力转化为攻击性，在对抗和征服中释放肾上腺素。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'B',
        text: '暴饮暴食，喝得烂醉，或者疯狂购物刷爆卡',
        values: { 'Grail': 2, 'Nectar': 1 },
        flavorText: '填满胃或者填满购物车，都能暂时填补内心的空虚。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'C',
        text: '彻底断联，关机，一个人待在黑暗的房间里，什么都不做',
        values: { 'Moon': 2, 'Winter': 1 },
        flavorText: '像冬眠的动物一样，降低消耗，等待寒冬过去。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'D',
        text: '整理房间，打扫卫生，把东西归类，或者拼乐高',
        values: { 'Sky': 2, 'Forge': 1 },
        flavorText: '秩序能带来平静。重塑环境能让你找回对生活的掌控感。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'E',
        text: '找朋友倾诉，或者回家和父母待一会儿，寻求安慰',
        values: { 'Rose': 2, 'Heart': 1 },
        flavorText: '人与人的连接是最好的治愈。你不需要独自承担所有重量。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'F',
        text: '翻看以前的日记、相册，沉浸在回忆里，或者写点东西',
        values: { 'Secret Histories': 2, 'Scale': 1 },
        flavorText: '回望过去能让你确认自己的坐标。在故事中，你找回了内心的锚点。',
        nextQuestionId: 'r_group'
      }
    ]
  },
  {
    id: 'r_group',
    title: '团队角色',
    description: '在小组作业或团队项目中，大家乱作一团时，你通常会？',
    options: [
      {
        id: 'A',
        text: '冷静分析现状，梳理出逻辑框架，告诉大家该往哪个方向走',
        values: { 'Lantern': 2, 'Sky': 1 },
        flavorText: '你是大脑。你提供方向和理论支持，驱散混乱的迷雾。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'B',
        text: '直接分配任务，催促进度，甚至自己动手把最难的部分做了',
        values: { 'Forge': 2, 'Edge': 1 },
        flavorText: '你是引擎。没有你，项目永远停留在纸面上。你用行动锻造结果。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'C',
        text: '调解矛盾，安抚情绪，买奶茶，确保大家还能坐在一起',
        values: { 'Nectar': 2, 'Heart': 1 },
        flavorText: '你是粘合剂。你确保团队不会在完成任务前散伙，维持着跳动的节奏。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'D',
        text: '平时不怎么说话，但关键时刻能搞定搞不定的资源或技术难题',
        values: { 'Knock': 2, 'Rose': 1 },
        flavorText: '你是万能钥匙。你总有办法打开那些“不可能”的门。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'E',
        text: '指出方案里的漏洞和风险，哪怕这会让人不快',
        values: { 'Scale': 2, 'Edge': 1 },
        flavorText: '你是磨刀石。你的质疑和挑战，让最终的成果更加坚不可摧。',
        nextQuestionId: 'r_change'
      }
    ]
  },
  {
    id: 'r_change',
    title: '面对变故',
    description: '如果因为不可抗力，你必须搬到一个完全陌生的城市生活，你的第一反应是？',
    options: [
      {
        id: 'A',
        text: '隐隐有些兴奋，终于可以摆脱过去的身份，重新开始',
        values: { 'Moth': 2, 'Rose': 1 },
        flavorText: '你是天生的流浪者。旧的躯壳只会束缚你，你渴望蜕变。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'B',
        text: '焦虑和不安，担心失去现有的朋友、习惯和安全感',
        values: { 'Heart': 2, 'Scale': 1 },
        flavorText: '根基对你很重要。拔根而起总是伴随着疼痛，你眷恋着熟悉的一切。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'C',
        text: '冷静，立刻开始研究当地的地图、攻略、租房和交通信息',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '只要掌握了足够的信息，就没有什么可怕的。知识就是你的光。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'D',
        text: '不舍，会带走很多旧物，并在新家复刻原来的布置',
        values: { 'Secret Histories': 2, 'Moon': 1 },
        flavorText: '你随身携带着你的历史。无论走到哪里，家都在你心里，在你的记忆里。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'E',
        text: '务实，思考那边的发展机会、薪资水平和资源',
        values: { 'Forge': 2, 'Edge': 1 },
        flavorText: '环境只是资源，重要的是它能否让你变得更强。你准备好在新炉火中重铸自己。',
        nextQuestionId: 'r_learning'
      }
    ]
  },
  {
    id: 'r_learning',
    title: '新技能',
    description: '你想学一项新技能（比如剪辑、编程、乐器），你会怎么开始？',
    options: [
      {
        id: 'A',
        text: '找最权威的教材或课程，从基础理论开始啃，建立体系',
        values: { 'Lantern': 2, 'Sky': 1 },
        flavorText: '基础不牢，地动山摇。你要的是系统性的掌握，而非皮毛。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'B',
        text: '直接上手试，遇到问题再搜，边做边学，不行就换个方法',
        values: { 'Knock': 2, 'Forge': 1 },
        flavorText: '实践出真知，错误是最好的老师。你通过不断的尝试来寻找窍门。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'C',
        text: '找个厉害的老师或朋友带，或者报个班，和大家一起学',
        values: { 'Heart': 2, 'Nectar': 1 },
        flavorText: '传承和交流能让你少走弯路。你喜欢有人陪伴的学习，喜欢这种连接。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'D',
        text: '设定一个高难度的目标（比如一个月学会），逼自己去完成',
        values: { 'Scale': 2, 'Edge': 1 },
        flavorText: '挑战激发生命力。你想看看自己的极限在哪里，你想征服这个技能。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'E',
        text: '凭感觉玩，不追求专业，只追求有趣和表达自我',
        values: { 'Moon': 2, 'Moth': 1 },
        flavorText: '灵感比技巧更重要。你享受的是创造的过程，是那一瞬间的火花。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'F',
        text: '研究这个技能的发展史、流派演变和大师们的生平',
        values: { 'Rose': 2, 'Secret Histories': 1 },
        flavorText: '理解了过去，才能更好地掌握现在。你从历史中汲取智慧。',
        nextQuestionId: 'r_crisis'
      }
    ]
  },
  {
    id: 'r_crisis',
    title: '荒野求生',
    description: '你在徒步旅行中迷路了，手机没信号，天快黑了，周围一片寂静，你会？',
    options: [
      {
        id: 'A',
        text: '分析太阳方位、植被分布和地形，逻辑推理出正确的方向',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '理性是你永不熄灭的火把。即使在黑暗中，逻辑也能指引方向。',
        nextQuestionId: 'r_authority'
      },
      {
        id: 'B',
        text: '寻找当地人留下的痕迹，或者尝试寻找信号求助',
        values: { 'Rose': 2, 'Knock': 1 },
        flavorText: '路在嘴上，连接他人就能打开生路。你相信总有通道通向外界。',
        nextQuestionId: 'r_authority'
      },
      {
        id: 'C',
        text: '强行开辟一条路，或者利用手头的工具搭建庇护所',
        values: { 'Forge': 2, 'Edge': 1 },
        flavorText: '没有路，就造一条路。障碍就是用来被打破的，环境是可以被改造的。',
        nextQuestionId: 'r_authority'
      },
      {
        id: 'D',
        text: '原地等待救援，保存体力，减少消耗，不盲目行动',
        values: { 'Scale': 2, 'Winter': 1 },
        flavorText: '在危机中，静止往往比盲动更安全。你懂得忍耐和等待的艺术。',
        nextQuestionId: 'r_authority'
      },
      {
        id: 'E',
        text: '警惕周围的动静，拿起手边的棍棒，准备好应对野兽',
        values: { 'Edge': 2, 'Moon': 1 },
        flavorText: '世界是危险的，你时刻准备着战斗。生存就是一场战争。',
        nextQuestionId: 'r_authority'
      }
    ]
  },
  {
    id: 'r_authority',
    title: '规则与束缚',
    description: '面对繁琐、僵化且看似无意义的规章制度，你的态度通常是？',
    options: [
      {
        id: 'A',
        text: '试图理解制定这些规则背后的逻辑，虽然繁琐但可能有其必要性',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '你试图在混乱中寻找秩序。即使是糟糕的规则，也比没有规则的混沌要好。',
        nextQuestionId: 'r_unknown'
      },
      {
        id: 'B',
        text: '表面遵守，但内心毫无波澜，甚至会利用规则来保护自己',
        values: { 'Winter': 2, 'Scale': 1 },
        flavorText: '你学会了在体制内隐身。沉默的服从是你最好的伪装。',
        nextQuestionId: 'r_unknown'
      },
      {
        id: 'C',
        text: '如果它阻碍了我，我会毫不犹豫地挑战它，或者直接打破它',
        values: { 'Edge': 2, 'Forge': 1 },
        flavorText: '规则是强者的工具，也是弱者的枷锁。你不愿做被束缚的那个。',
        nextQuestionId: 'r_unknown'
      },
      {
        id: 'D',
        text: '寻找规则的漏洞，或者用一种“创造性”的方式去解读它',
        values: { 'Knock': 2, 'Moth': 1 },
        flavorText: '没有绝对的墙。只要角度刁钻，任何规则都有缝隙可钻。',
        nextQuestionId: 'r_unknown'
      },
      {
        id: 'E',
        text: '无视它。如果没人看见，规则就不存在',
        values: { 'Moth': 2, 'Moon': 1 },
        flavorText: '你像风一样自由。网能捕鸟，但捕不住风。',
        nextQuestionId: 'r_unknown'
      }
    ]
  },
  {
    id: 'r_unknown',
    title: '未解之谜',
    description: '你遇到了一件无法用现有常识解释的怪事（比如强烈的既视感、不可思议的巧合），你会？',
    options: [
      {
        id: 'A',
        text: '感到不安，试图用科学或心理学理论强行解释它',
        values: { 'Lantern': 2, 'Sky': 1 },
        flavorText: '未知让你恐惧。你必须用理性的光芒照亮每一个角落。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'B',
        text: '感到兴奋，这种神秘感让你着迷，想要一探究竟',
        values: { 'Moon': 2, 'Grail': 1 },
        flavorText: '平庸的现实太无聊了。你渴望那层面纱背后的战栗。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'C',
        text: '联想到某种宿命、传说或者过去的因果',
        values: { 'Secret Histories': 2, 'Rose': 1 },
        flavorText: '时间不是线性的。你听到了历史的回响，看到了命运的丝线。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'D',
        text: '不以为意，生活还要继续，这些怪事与我无关',
        values: { 'Heart': 2, 'Scale': 1 },
        flavorText: '你的心脏稳健地跳动。无论发生什么，生活总是要向前走的。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'E',
        text: '顺其自然，也许这是一种启示，或者只是世界的玩笑',
        values: { 'Nectar': 2, 'Moth': 1 },
        flavorText: '你接受混乱。世界本就是疯狂的，何必强求解释？',
        nextQuestionId: 'r_secret'
      }
    ]
  },
  {
    id: 'r_secret',
    title: '秘密',
    description: '一个不太熟的朋友突然告诉你一个惊人的秘密，你的第一反应是？',
    options: [
      {
        id: 'A',
        text: '守口如瓶，绝不告诉第三个人，这是做人的底线',
        values: { 'Scale': 2, 'Heart': 1 },
        flavorText: '信任是神圣的。你是一个安全的容器，能容纳他人的脆弱。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'B',
        text: '暗中记下，也许以后能用它来交换利益或作为创作素材',
        values: { 'Edge': 2, 'Moon': 1 },
        flavorText: '信息就是武器。你不知道什么时候会用到这把刀，但先藏好总没错。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'C',
        text: '用这个秘密去交换另一个秘密，或者告诉特定的某人',
        values: { 'Knock': 2, 'Moth': 1 },
        flavorText: '秘密是流通的货币。只有流动起来，它才有价值。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'D',
        text: '听听就好，享受这种窥探他人生活的快感',
        values: { 'Grail': 2, 'Nectar': 1 },
        flavorText: '你喜欢这种隐秘的愉悦。窥视是人类最原始的欲望之一。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'E',
        text: '转头就忘，不想卷入麻烦，知道太多没好处',
        values: { 'Winter': 2, 'Scale': 1 },
        flavorText: '知道得越少，活得越久。你不想沾染不必要的因果。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'F',
        text: '把它写进日记里，或者作为创作的素材',
        values: { 'Secret Histories': 2, 'Rose': 1 },
        flavorText: '这是发生过的事实。无论好坏，它都值得被记录在案。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'G',
        text: '很难保守住，可能会不小心说漏嘴，或者忍不住想分享',
        values: { 'Moon': 2, 'Moth': 1 },
        flavorText: '秘密像飞蛾一样，总是忍不住扑向光亮。你无法控制这种冲动。',
        nextQuestionId: 'r_aesthetic'
      }
    ]
  },
  {
    id: 'r_aesthetic',
    title: '审美偏好',
    description: '你最喜欢的电影、书籍或艺术作品类型通常是？',
    options: [
      {
        id: 'A',
        text: '烧脑悬疑、硬科幻或哲学思辨类，让人思考的',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '你喜欢智力上的挑战。你追求真理，哪怕它令人战栗。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'B',
        text: '动作片、战争片或竞技题材，让人热血沸腾的',
        values: { 'Edge': 2, 'Forge': 1 },
        flavorText: '力量、冲突和征服让你着迷。你欣赏那种极致的对抗美学。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'C',
        text: '爱情片、唯美文艺片或感官刺激强烈的，让人沉浸的',
        values: { 'Nectar': 2, 'Grail': 1 },
        flavorText: '你追求美、情感和极致的体验。你想要被感动，被淹没。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'D',
        text: '荒诞、超现实主义或实验艺术，让人摸不着头脑的',
        values: { 'Moth': 2, 'Moon': 1 },
        flavorText: '常规让你窒息。你喜欢那些疯狂、混乱和不可名状的东西。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'E',
        text: '悲剧、末世题材或极简主义风格，让人感到苍凉的',
        values: { 'Winter': 2, 'Scale': 1 },
        flavorText: '在消逝和残缺中，你看到了真正的美。结局总是比过程更迷人。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'F',
        text: '历史剧、传记片或史诗，让人感到厚重的',
        values: { 'Rose': 2, 'Secret Histories': 1 },
        flavorText: '真实发生过的故事比虚构更迷人。你喜欢那种时间沉淀下来的质感。',
        nextQuestionId: 'r_philosophy'
      }
    ]
  },
  {
    id: 'r_philosophy',
    title: '人生信条',
    description: '最后，你觉得人这一生，最重要的是？',
    options: [
      {
        id: 'A',
        text: '看清世界的真相，活得明白，不被愚弄',
        values: { 'Lantern': 3, 'Sky': 2 },
        flavorText: '哪怕真相是残酷的，也比在虚假的幸福中沉睡要好。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'B',
        text: '体验各种滋味，活得精彩，不留遗憾',
        values: { 'Grail': 3, 'Nectar': 2 },
        flavorText: '人生苦短，及时行乐。你要尝遍这世间所有的甘甜与苦涩。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'C',
        text: '创造出属于自己的东西，活得有力，留下痕迹',
        values: { 'Forge': 3, 'Edge': 2 },
        flavorText: '世界是可以被改变的，而你就是那个改变者。你要亲手锻造你的命运。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'D',
        text: '接受一切的发生，活得平静，顺其自然',
        values: { 'Winter': 3, 'Scale': 2 },
        flavorText: '万物终将归于寂静。学会放手，学会接受结局，是最大的智慧。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'E',
        text: '不断变化和适应，活得自由，不被定义',
        values: { 'Moth': 3, 'Moon': 2 },
        flavorText: '不要定义我，我时刻都在成为新的自己。我是风，是火，是飞蛾。',
        nextQuestionId: 'r_dreams'
      }
    ]
  },
  {
    id: 'r_dreams',
    title: '梦境的启示',
    description: '你经常做什么样的梦？或者你希望在梦中看到什么？',
    options: [
      {
        id: 'A',
        text: '飞翔、坠落、蜕变，或者变成其他生物',
        values: { 'Moon': 2, 'Moth': 1 },
        flavorText: '在梦中，你摆脱了肉体的束缚，回归了混乱的本质。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'B',
        text: '重复的走廊、打不开的门、或者寻找某种伤口',
        values: { 'Knock': 2, 'Rose': 1 },
        flavorText: '你直觉地知道，梦是通往另一个世界的裂隙。你在寻找那把钥匙。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'C',
        text: '宏大的图书馆、古老的城市、或者历史事件的重演',
        values: { 'Secret Histories': 2, 'Sky': 1 },
        flavorText: '你在梦中漫步于漫宿的林地，阅读着被遗忘的历史。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'D',
        text: '被追杀、激烈的战斗、或者在废墟中求生',
        values: { 'Edge': 2, 'Forge': 1 },
        flavorText: '即使在梦中，你的斗争本能也从未停歇。你在梦中磨练你的爪牙。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'E',
        text: '温暖的光芒、被爱包围、或者治愈的场景',
        values: { 'Nectar': 2, 'Heart': 1 },
        flavorText: '你的潜意识在自我修复，维持着生命的律动。梦是你心灵的避风港。',
        nextQuestionId: 'r_failure'
      }
    ]
  },
  {
    id: 'r_failure',
    title: '面对失败',
    description: '当你搞砸了一件非常重要的事情，你的第一反应是？',
    options: [
      {
        id: 'A',
        text: '彻底拆解复盘，找出每一个错误的步骤，确保下次不再犯',
        values: { 'Forge': 2, 'Edge': 1 },
        flavorText: '失败是燃料。燃烧它，锻造出更完美的自己。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'B',
        text: '陷入自责和沉默，需要很长时间来消化这种冰冷的感觉',
        values: { 'Scale': 2, 'Winter': 1 },
        flavorText: '你接受了结局。在沉默中，你学会了忍受，学会了与寒冷共存。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'C',
        text: '理性分析原因，将其视为获取数据的必要成本，不带情绪',
        values: { 'Sky': 2, 'Lantern': 1 },
        flavorText: '没有失败，只有反馈。理智让你免于情绪的干扰，让你看清因果。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'D',
        text: '承认自己的欲望或贪婪导致了失误，并接受这种不完美',
        values: { 'Grail': 2, 'Moon': 1 },
        flavorText: '跌倒也是一种体验。你品尝着失败的苦涩，正如品尝成功的甘甜。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'E',
        text: '试图掩盖、或者用另一个谎言来弥补，不让别人发现',
        values: { 'Knock': 2, 'Moth': 1 },
        flavorText: '真相是可以被重塑的。只要你手段足够高明，失败也可以变成成功。',
        nextQuestionId: 'r_relationship'
      }
    ]
  },
  {
    id: 'r_relationship',
    title: '理想的羁绊',
    description: '你认为最理想的亲密关系（伴侣或挚友）应该是怎样的？',
    options: [
      {
        id: 'A',
        text: '互相吞噬，合二为一，极致的占有和激情',
        values: { 'Grail': 3, 'Nectar': 2 },
        flavorText: '你渴望彻底的融合，哪怕这意味着毁灭。爱就是饥饿。'
      },
      {
        id: 'B',
        text: '互相守护，提供源源不断的支持和安全感',
        values: { 'Heart': 3, 'Scale': 2 },
        flavorText: '在这个残酷的世界里，你们是彼此的避难所。爱就是永不停歇的脉搏。'
      },
      {
        id: 'C',
        text: '并肩作战，是可以把后背交给对方的战友',
        values: { 'Edge': 3, 'Forge': 2 },
        flavorText: '信任建立在共同的斗争中。你们是彼此最锋利的刀。爱就是并肩流血。'
      },
      {
        id: 'D',
        text: '互相启迪，在智识和精神上共同进步',
        values: { 'Lantern': 3, 'Sky': 2 },
        flavorText: '你们是彼此的光，照亮了通往更高境界的路。爱就是共同看见真理。'
      },
      {
        id: 'E',
        text: '保持距离，互相尊重对方的独立和秘密',
        values: { 'Winter': 3, 'Moon': 2 },
        flavorText: '最好的陪伴是静默的。你们懂得欣赏彼此的孤独。爱就是互不打扰的默契。'
      },
      {
        id: 'F',
        text: '共同探索未知，一起打破常规和禁忌',
        values: { 'Moth': 3, 'Rose': 2 },
        flavorText: '你们是共舞的飞蛾，一起扑向那不可知的火焰。爱就是一场疯狂的冒险。'
      }
    ]
  }
];
