import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import WifiIcon from '@mui/icons-material/Wifi';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export interface IAdvantages {
    icon: any,
    title: string;
    content: string;
    
}

export const advantages: IAdvantages[] = [{
    icon: CalendarMonthIcon,
    title: 'Гибкие сроки',
    content: 'Назначьте сроки сдачи в соответствии со своим графиком'
},
{
    icon: SchoolIcon,
    title: 'Сертификат',
    content: 'Получите сертификат по завершении'
},
{
    icon: WifiIcon,
    title: '100% онлайн',
    content: 'Начните сейчас и учитесь по собственному графику'
},
{
    icon: ChatBubbleIcon,
    title: 'Английский',
    content: 'Субтитры: Английский'
},]