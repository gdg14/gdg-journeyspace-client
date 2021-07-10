export type Feelings = 'anger' | 'annying' | 'disappoint' | 'happy' | 'hate' | 'regret' | 'relief' | 'sad' | 'thanks';

export function feelingToKorean(feeling: Feelings) {
  switch (feeling) {
    case 'anger':
      return '분노';
    case 'annying':
      return '짜증';
    case 'disappoint':
      return '실망';
    case 'happy':
      return '기쁨';
    case 'hate':
      return '증오';
    case 'regret':
      return '후회';
    case 'relief':
      return '안심';
    case 'sad':
      return '슬픔';
    case 'thanks':
      return '고마움';
    default:
      return '';
  }
}

export function feelingToPlanet(feeling: Feelings) {
  switch (feeling) {
    case 'anger':
      return '토성';
    case 'annying':
      return '수성';
    case 'disappoint':
      return '천왕성';
    case 'happy':
      return '지구';
    case 'hate':
      return '금성';
    case 'regret':
      return '달';
    case 'relief':
      return '목성';
    case 'sad':
      return '해왕성';
    case 'thanks':
      return '화성';
    default:
      return '우주 어딘가';
  }
}
