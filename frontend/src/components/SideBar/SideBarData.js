import dashboard_icon from '../../assets/icons/dashboard-icon.png';
import investment_icon from '../../assets/icons/investment-icon.png';
import projects_icon from '../../assets/icons/projects-icon.png';
import investors_icon from '../../assets/icons/investors-icon.png';
import rewards_icon from '../../assets/icons/rewards-icon.png';
import transactions_icon from '../../assets/icons/transactions-icon.png';
import accounts_icon from '../../assets/icons/accounts_icon.png';
import settings_icon from '../../assets/icons/settings-icon.png';
import id_verification_icon from '../../assets/icons/id_verification.png';

import {BiBookAlt} from 'react-icons/bi'
export const SideBarData = [
    {
        title:"Dashboard",
        icon:dashboard_icon,
        link:'/',
    },

    {
        title:"Investments",
        icon:investment_icon,
        link:'/investments',
    },

    {
        title:"Projects",
        icon:projects_icon,
        link:'/projects',
    },

    {
        title:"Investors",
        icon:investors_icon,
        link:'/investors/info',
    },

    {
        title:"Rewards",
        icon:rewards_icon,
        link:'/rewards',
    },

    {
        title:"Transactions",
        icon:transactions_icon,
        link:'/transactions',
    },
    {
        title:"Accounts",
        icon:accounts_icon,
        link:'/accounts',
    },

    {
        title:"ID Verification",
        icon: transactions_icon,
        link:'/id-verification',
    },

    {
        title:"Settings",
        icon:settings_icon,
        link:'/settings',
    },
];