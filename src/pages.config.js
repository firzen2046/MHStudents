import Activities from './pages/Activities';
import Banking from './pages/Banking';
import Business from './pages/Business';
import CantoneseLearn from './pages/CantoneseLearn';
import Community from './pages/Community';
import Education from './pages/Education';
import Exchange from './pages/Exchange';
import HKPlaces from './pages/HKPlaces';
import Home from './pages/Home';
import Housing from './pages/Housing';
import JobSearch from './pages/JobSearch';
import LivingInfo from './pages/LivingInfo';
import Registration from './pages/Registration';
import SupportOrganizations from './pages/SupportOrganizations';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "Banking": Banking,
    "Business": Business,
    "CantoneseLearn": CantoneseLearn,
    "Community": Community,
    "Education": Education,
    "Exchange": Exchange,
    "HKPlaces": HKPlaces,
    "Home": Home,
    "Housing": Housing,
    "JobSearch": JobSearch,
    "LivingInfo": LivingInfo,
    "Registration": Registration,
    "SupportOrganizations": SupportOrganizations,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};