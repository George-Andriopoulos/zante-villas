import {
  Car,
  ClipboardCheck,
  Compass,
  Home,
  KeyRound,
  Landmark,
  MessageCircle,
  ShieldAlert,
  ShoppingBasket,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

export const iconMap = {
  arrival: KeyRound,
  house: Home,
  beaches: Waves,
  dining: UtensilsCrossed,
  attractions: Landmark,
  activities: Compass,
  essentials: ShoppingBasket,
  transport: Car,
  emergency: ShieldAlert,
  checkin: ClipboardCheck,
  chat: MessageCircle,
} as const;

export type IconName = keyof typeof iconMap;
