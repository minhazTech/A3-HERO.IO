import { Link } from "react-router-dom";
import iconDownloads from "../assets/icon-downloads.png";
import iconRatings from "../assets/icon-ratings.png";
const AppCard = ({ app }) => {
    const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
    };

    return (
        <Link
      to={`/apps/${app.id}`}
      className="group flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md border border-slate-100"
    >
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-slate-900 line-clamp-1" title={app.title}>
          {app.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-medium">
            <img src={iconDownloads} alt="Downloads" className="h-3 w-3" />
            <span>{formatDownloads(app.downloads)}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-md text-xs font-medium">
            <img src={iconRatings} alt="Rating" className="h-3 w-3" />
            <span>{app.ratingAvg.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default AppCard;