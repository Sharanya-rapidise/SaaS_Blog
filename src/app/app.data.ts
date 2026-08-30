import { Title } from "@angular/platform-browser";

export interface list{
    icon: string;
    title: string;
    icon2 ?: string;
}

export const List_Data: list[] = [
    {icon:'home', title: 'Home'},
    {icon:'search', title: 'Stakeholders', icon2:'keyboard_arrow_right'},
    {icon:'account_balance', title: 'Client'},
    {icon:'description', title: 'Resources'},
    {icon:'trending_up', title: 'Opportunities'},
    {icon:'task_alt', title: 'Optimize', icon2: 'keyboard_arrow_right'},
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