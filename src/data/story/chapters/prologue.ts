import type { StoryNode } from '../../../types/story';

export const PROLOGUE_NODES: Record<string, StoryNode> = {
  'prologue_start': {
    id: 'prologue_start',
    text: '雨水敲打着窗户，像是在急切地传递某种警告。你站在苏格兰场阴冷的停尸房里，面前的解剖台上躺着一具奇怪的尸体。',
    speaker: 'narrator',
    background: '/images/bg/morgue.jpg', // Placeholder
    time: '1929年 11月 14日 - 下午 4:00',
    location: '伦敦 - 苏格兰场停尸房',
    nextId: 'prologue_body_desc'
  },
  'prologue_body_desc': {
    id: 'prologue_body_desc',
    text: '死者是一名普通的职员，但他的胸腔被从内部撑开，里面塞满了... 湿漉漉的飞蛾。它们似乎还在微微颤动。',
    speaker: 'narrator',
    time: '1929年 11月 14日 - 下午 4:05',
    location: '伦敦 - 苏格兰场停尸房',
    onEnter: {
      deltaSanity: -5,
      playSound: 'heartbeat'
    },
    choices: [
      {
        text: '仔细观察飞蛾',
        nextId: 'prologue_examine_moths',
        condition: {
          minSanity: 90
        }
      },
      {
        text: '后退一步',
        nextId: 'prologue_morgan_enter'
      }
    ]
  },
  'prologue_examine_moths': {
    id: 'prologue_examine_moths',
    text: '你强忍着恶心凑近观察。这些飞蛾的翅膀上有着类似眼睛的斑纹。你感觉到一阵眩晕，仿佛那些眼睛也在注视着你。',
    speaker: 'narrator',
    onEnter: {
      deltaSanity: -5,
      unlockClue: ['clue_moth_pattern']
    },
    nextId: 'prologue_morgan_enter'
  },
  'prologue_morgan_enter': {
    id: 'prologue_morgan_enter',
    text: '“精彩的死法，不是吗？” 一个低沉的声音从门口传来。摩根督察穿着一件被雨水浸透的风衣，手里拿着一份档案。',
    speaker: 'morgan',
    emotion: 'neutral',
    onEnter: {
      unlockClue: ['clue_morgan_statement']
    },
    nextId: 'prologue_morgan_offer'
  },
  'prologue_morgan_offer': {
    id: 'prologue_morgan_offer',
    text: '“这案子归防剿局了。至于你，探员... 你看到了不该看的东西。现在你有两个选择：加入我们，或者作为疯子被关进贝德拉姆。”',
    speaker: 'morgan',
    choices: [
      {
        text: '质疑：指出这些飞蛾的超自然本质',
        nextId: 'prologue_deduction_success',
        condition: {
          requiredClue: 'clue_supernatural_nature'
        }
      },
      {
        text: '接受：加入防剿局',
        nextId: 'prologue_accept',
        condition: {
          minSanity: 50
        }
      },
      {
        text: '拒绝：我受够了这些疯话',
        nextId: 'prologue_refuse'
      }
    ]
  },
  'prologue_deduction_success': {
    id: 'prologue_deduction_success',
    text: '“看来你比我想象的更敏锐。”摩根挑了挑眉毛，“没错，它们来自‘漫宿’。既然你已经理解了这一点，那么你正是我们需要的人。”',
    speaker: 'morgan',
    onEnter: {
      deltaReputation: { suppression_bureau: 20 },
      deltaSanity: 10
    },
    nextId: 'prologue_accept'
  },
  'prologue_accept': {
    id: 'prologue_accept',
    text: '你接过了那份档案。摩根露出了一个难以察觉的微笑，递给你一枚沉甸甸的徽章。“明智的选择。欢迎来到世界的背面。”',
    speaker: 'morgan',
    onEnter: {
      gainItem: ['item_bureau_badge'],
      deltaReputation: { suppression_bureau: 10 }
    },
    nextId: 'chapter1_start' // Future implementation
  },
  'prologue_refuse': {
    id: 'prologue_refuse',
    text: '你摇了摇头，试图推开摩根。但他身后的两名黑衣人迅速制服了你。最后你听到的声音是镇静剂注入血管的嘶嘶声...',
    speaker: 'narrator',
    onEnter: {
      deltaSanity: -100 // Game Over
    }
  }
};
