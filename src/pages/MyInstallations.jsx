import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import appsData  from "../data/apps";
import useLocalStorage  from "../hook/useLocalStorage";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import appError from "../assets/App-Error.png";

const MyInstallations = () => {

  const [installedAppsIds, setInstalledAppsIds] = useLocalStorage("installedApps", []);
  const [sortOrder, setSortOrder] = useState("high-low");

  const installedApps = useMemo(() => {
    let result = appsData.filter((app) => installedAppsIds.includes(app.id));

    result = [...result].sort((a, b) => {
      if (sortOrder === "high-low") {
        return b.size - a.size; // Sort by size 
      }else {
        return a.size - b.size;
      }
    });

    return result;
  }, [installedAppsIds, sortOrder]);

  const handleUninstall = (id, title) => {
    setInstalledAppsIds(installedAppsIds.filter((appId) => appId !== id));
    toast.success(`${title} uninstalled successfully!`);
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

    return (
         <div className="py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Your Installed Apps</h1>
          <p className="text-slate-600">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-semibold text-slate-900">
            {installedApps.length} Apps Found
          </h2>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="high-low">Sort By Size (High-Low)</option>
            <option value="low-high">Sort By Size (Low-High)</option>
          </select>
        </div>

        {installedApps.length > 0 ? (
          <div className="flex flex-col gap-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <Link to={`/apps/${app.id}`} className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                      {app.title}
                    </Link>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      <div className="flex items-center gap-1 text-emerald-600">
                        <img src={iconDownload} alt="Downloads" className="h-4 w-4" />
                        <span>{formatDownloads(app.downloads)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <img src={iconRating} alt="Rating" className="h-4 w-4" />
                        <span>{app.ratingAvg.toFixed(1)}</span>
                      </div>
                      <div className="text-slate-400">
                        {app.size} MB
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-md hover:bg-emerald-600 transition-colors"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <img src={appError} alt="Not found" className="w-64 h-64 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Apps Installed</h3>
            <p className="text-slate-600 mb-6">You haven't installed any apps yet. Go to the App Store to find some!</p>
            <Link
              to="/apps"
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Browse Apps
            </Link>
          </div>
        )}
      </div>
    </div>
    );
};

export default MyInstallations;