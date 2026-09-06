import { Title } from "@angular/platform-browser";

export interface list{
    icon: string;
    title: string;
    icon2 ?: string;
    children?: list[];
}

export const List_Data: list[] = [
    {icon:'home', title: 'Home'},
    {icon:'search', title: 'Stakeholders', icon2:'keyboard_arrow_right'},
    {icon:'account_balance', title: 'Client'},
    {icon:'description', title: 'Resources'},
    {icon:'trending_up', title: 'Opportunities'},
    {icon:'task_alt', title: 'Optimize', icon2: 'keyboard_arrow_right', children: [
        {icon: 'language', title: 'Divisions'},
        {icon: 'newspaper', title: 'Stakeholder devisions'}
    ]},
    {icon: 'badge', title: 'Keywords'},
    {icon: 'view_in_ar', title: 'Topics'},
    {icon: 'trending_up', title: 'Performance'},
    {icon: 'assignment_late', title: 'content'},
    {icon: 'group', title: 'Team & Workflow', icon2: 'keyboard_arrow_right'},
    {icon: 'settings', title: 'Settings'},
]

export interface pro{
    micon: string;
    ptitle: string;
    bg: string;
    col: string;
}

export const Pro_Data: pro[] = [
    {micon: 'trending_up', ptitle: 'Saas Blog Growth', bg: '#e1aeff', col: '#6e1bb1'},
    {micon: 'storefront', ptitle: 'E-commerce Product', bg: '#f2cef7', col: '#d015e9'},
    {micon: 'call_to_action', ptitle: 'Paid Ads Experiment', bg: '#c5ddfd', col: '#1578e9'},
    {micon: 'hub', ptitle: 'Social Media Content', bg: '#b1f0b1', col: '#1a851a'},
]

export interface rlist{
    rtitle: string;
    rsub: string;
    status: string;
    fcolor: string;
}

export const Tasks: rlist[] = [
    {rtitle: 'Publish "10 Best Practices for HR Onboarding" article', rsub:'Article · Due tomorrow', status:'In review', fcolor: '#abab0e'},
    {rtitle: 'Draft outline for "Onboarding Automation Guide"', rsub:'Outline · Due Feb 8', status:'In progress', fcolor: 'green'},
    {rtitle: 'Research and Development for "Escalation Module"', rsub:'Report · Completed june 12', status:'Completed', fcolor: 'red'},
]

export interface teams{
    init: string;
    tname: string;
    desig: string;
    col: string;
    cCol: string;
}

export const TEAM_LIST: teams[] = [
    {init: 'A', tname:'Andika', desig:'Project Lead', col:'#cecefa', cCol:'blue'},
    {init: 'S', tname:'Sarah Chen', desig:'CEO · Primary contact', col:'#fde3e7', cCol:'#cf1531'},
    {init: 'M', tname:'Marcus Rivera', desig:'CMO  · Marketing lead', col:'#dff7df', cCol:'#054b05'},
    {init: 'P', tname:'Priyal Patel', desig:'Content Director', col:'#f3d0f3', cCol:'#580858'},
]

export interface proinfo{
    cat: string;
    info: string;
}

export const P_INFO: proinfo[] = [
    {cat: 'Client', info: 'Acme Cloud'},
    {cat: 'Industry', info: 'SaaS · HR-tech'},
    {cat: 'Started', info: 'Jan 8, 2026'},
    {cat: 'Deadline', info: 'Feb 28, 2026'},
    {cat: 'Budget', info: '$24,000'},
    {cat: 'Type', info: 'Content engine'},
]