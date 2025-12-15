import type { Item } from '../../types/story';

export const ITEMS: Record<string, Item> = {
  'item_brass_key': {
    id: 'item_brass_key',
    name: '黄铜钥匙',
    description: '一把沉重的黄铜钥匙，表面有些氧化。',
    icon: 'Key', // Lucide icon name
    type: 'key_item'
  },
  'item_sedative': {
    id: 'item_sedative',
    name: '镇静剂',
    description: '一瓶标有“急用”的药片。能稍微平复颤抖的手。',
    icon: 'Pill',
    type: 'consumable',
    effect: {
      restoreSanity: 20
    }
  },
  'item_old_photo': {
    id: 'item_old_photo',
    name: '旧照片',
    description: '一张黑白照片，边缘已经泛黄。',
    icon: 'Image',
    type: 'key_item'
  }
};

export const getItem = (id: string): Item | undefined => {
  return ITEMS[id];
};
