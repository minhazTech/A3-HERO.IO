import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import  AppCard  from "../components/AppCard";
import appsData from "../data/apps";
import  Loader  from "../components/Loader";
import notFound from "../assets/error-404.png";


const AllApps = () => {

     const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("high-low");
  const [isSearching, setIsSearching] = useState(false);

  // Simulate search loading
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, sortOrder]);

  const filteredAndSortedApps = useMemo(() => {
    let result = appsData;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter((app) =>
        app.title.toLowerCase().includes(lowerQuery)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortOrder === "high-low") {
        return b.downloads - a.downloads;
      } else {
        return a.downloads - b.downloads;
      }
    });

    return result;
  }, [searchQuery, sortOrder]);

    return (
       <div className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our All Applications</h1>
          <p className="text-slate-600">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ({filteredAndSortedApps.length}) Apps Found
          </h2>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="search Apps"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="high-low">High-Low</option>
              <option value="low-high">Low-High</option>
            </select>
          </div>
        </div>

        {isSearching ? (
          <div className="py-20 flex justify-center">
            <Loader />
          </div>
        ) : filteredAndSortedApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedApps.map((apps) => (
              <AppCard key={apps.id} app={apps} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <img src={notFound} alt="Not found" className="w-64 h-64 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">OPPS!! APP NOT FOUND</h3>
            <p className="text-slate-600">The App you are requesting is not found on our system. please try another apps</p>
          </div>
        )}
      </div>
    </div>
    );
};

export default AllApps;