import { Link } from "react-router-dom";
import AppCard from './AppCard';
import appsData  from "../data/apps";

const TopAppsSection = () => {
    const topApps = appsData.slice(0, 8);
    
    return (
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Trending Apps</h2>
                    <p className="text-slate-600">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {topApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                    ))}
                </div>
                <div className="text-center">
                    <Link
                    to="/apps"
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-700"
                    >
                    Show All
                    </Link>
                </div>
                </div>
            </section>
    );
};

export default TopAppsSection;