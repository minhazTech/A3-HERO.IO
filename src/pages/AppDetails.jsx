import { useParams, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { toast } from "sonner";
import  appsData from "../data/apps";
import AppError from "../assets/App-Error.png";
import useLocalStorage from "../hook/useLocalStorage";
import iconDownloads from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import iconReviews from "../assets/icon-review.png";


const AppDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [installedApps, setInstalledApps] = useLocalStorage("installedApps", []);

   const app = appsData.find((a) => Number(a.id) === Number(id));

     if (!app) {
    return (
      <div className="py-20 text-center flex flex-col items-center">
        <img src={AppError} alt="Not found" className="w-64 h-64 mb-6" />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">OPPS!! APP NOT FOUND</h3>
        <p className="text-slate-600 mb-6">The App you are requesting is not found on our system. please try another apps</p>
        <button
          onClick={() => navigate("/apps")}
          className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Go Back!
        </button>
      </div>
    );
  }


  const isInstalled = installedApps.includes(app.id);

  const handleInstall = () => {
    if (!isInstalled) {
      setInstalledApps([...installedApps, app.id]);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  // Prepare chart data
  const chartData = [...app.ratings].reverse().map((r) => ({
    name: r.name,
    count: r.count,
  }));

    return (
         <div className="py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* App Info Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-48 h-48 shrink-0 rounded-3xl overflow-hidden bg-white shadow-md border border-slate-100 p-4">
            <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1 flex flex-col text-left">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{app.title}</h1>
            <p className="text-indigo-600 font-medium mb-6">Developed by {app.companyName}</p>
            
            <div className="flex items-center gap-8 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-emerald-600 mb-1">
                  <img src={iconDownloads} alt="Downloads" className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-500 uppercase font-medium">Downloads</span>
                <span className="text-2xl font-bold text-slate-900">{formatNumber(app.downloads)}</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  <img src={iconRating} alt="Rating" className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-500 uppercase font-medium">Average Ratings</span>
                <span className="text-2xl font-bold text-slate-900">{app.ratingAvg.toFixed(1)}</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-indigo-500 mb-1">
                  <img src={iconReviews} alt="Reviews" className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-500 uppercase font-medium">Total Reviews</span>
                <span className="text-2xl font-bold text-slate-900">{formatNumber(app.reviews)}</span>
              </div>
            </div>

            <div>
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-colors ${
                  isInstalled
                    ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                    : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-12"></div>

        {/* Ratings Chart */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Ratings</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%" minHeight={250}>
              <BarChart data={chartData} layout="vertical" >
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} width={60} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#f59e0b" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Description</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{app.description}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AppDetails;