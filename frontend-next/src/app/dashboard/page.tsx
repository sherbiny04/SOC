"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Calendar,
  Copy,
  Users,
  Folder,
  Settings,
  Search,
  Bell,
  Plus,
  Menu,
  Play,
  Clock,
  Star,
  CheckCircle,
  Palette,
  User,
  Filter,
  Download,
  Edit2,
  Trash2,
  ChevronDown,
  FileText,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FieldDef {
  key: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

interface EntityConfig {
  label: string;
  formCreate: string;
  formEdit: string;
  formDesc: string;
  icon: string;
  themeBg: string;
  fields: FieldDef[];
  items: Record<string, unknown>[];
}

type PageKey =
  | "overview"
  | "sessions"
  | "templates"
  | "participants"
  | "resources"
  | "settings";

/* ------------------------------------------------------------------ */
/*  Seed data                                                          */
/* ------------------------------------------------------------------ */

const initialEntities: Record<string, EntityConfig> = {
  sessions: {
    label: "Sessions",
    formCreate: "Schedule Session",
    formEdit: "Update Session",
    formDesc: "Add a new collaborative session to the calendar.",
    icon: "calendar",
    themeBg: "bg-brand-peach",
    fields: [
      { key: "title", label: "Session Title", type: "text", placeholder: "e.g. Design Sprint Kickoff" },
      { key: "date", label: "Date & Time", type: "text", placeholder: "Mar 18, 10:00 AM" },
      { key: "participants", label: "Est. Participants", type: "number", placeholder: "10" },
      { key: "status", label: "Status", type: "select", options: ["Upcoming", "Completed", "Cancelled"] },
    ],
    items: [
      { id: 1, title: "Facilitation 101 Workshop", date: "Mar 18, 10:00", participants: 18, status: "Upcoming" },
      { id: 2, title: "Quarterly Planning Session", date: "Mar 20, 14:00", participants: 24, status: "Upcoming" },
      { id: 3, title: "Team Retrospective", date: "Mar 12, 16:00", participants: 12, status: "Completed" },
      { id: 4, title: "Wireframe Review", date: "Mar 15, 09:00", participants: 6, status: "Completed" },
      { id: 5, title: "Onboarding Cohort 4", date: "Mar 25, 11:00", participants: 30, status: "Upcoming" },
    ],
  },
  templates: {
    label: "Templates",
    formCreate: "New Template",
    formEdit: "Edit Template",
    formDesc: "Create a reusable structure for meetings.",
    icon: "copy",
    themeBg: "bg-brand-pink",
    fields: [
      { key: "name", label: "Template Name", type: "text", placeholder: "e.g. Weekly Sync" },
      { key: "category", label: "Category", type: "select", options: ["Agile", "Operations", "Strategy", "Design"] },
      { key: "usage", label: "Usage Count", type: "number", placeholder: "0" },
    ],
    items: [
      { id: 1, name: "Sprint Retrospective", category: "Agile", usage: 12 },
      { id: 2, name: "Weekly Team Sync", category: "Operations", usage: 9 },
      { id: 3, name: "Project Kickoff", category: "Strategy", usage: 7 },
      { id: 4, name: "Design Critique", category: "Design", usage: 15 },
      { id: 5, name: "1-on-1 Check-in", category: "Operations", usage: 32 },
    ],
  },
  participants: {
    label: "Participants",
    formCreate: "Invite Participant",
    formEdit: "Update Participant",
    formDesc: "Add people to your workspace directory.",
    icon: "users",
    themeBg: "bg-brand-lavender",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "e.g. Jane Doe" },
      { key: "role", label: "Role", type: "select", options: ["Facilitator", "Contributor", "Observer", "Admin"] },
      { key: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
    ],
    items: [
      { id: 1, name: "Amina Saleh", role: "Admin", email: "amina@mediatalk.us" },
      { id: 2, name: "Leo Kim", role: "Observer", email: "leo@mediatalk.us" },
      { id: 3, name: "Maya Chen", role: "Contributor", email: "maya@mediatalk.us" },
      { id: 4, name: "Sam Rivera", role: "Facilitator", email: "sam@mediatalk.us" },
      { id: 5, name: "Dave Harper", role: "Contributor", email: "dave@mediatalk.us" },
    ],
  },
  resources: {
    label: "Resources",
    formCreate: "Upload Resource",
    formEdit: "Edit Resource Details",
    formDesc: "Upload files and guides for sessions.",
    icon: "folder",
    themeBg: "bg-brand-mint",
    fields: [
      { key: "title", label: "Resource Title", type: "text", placeholder: "e.g. Branding deck" },
      { key: "type", label: "File Type", type: "select", options: ["PDF", "PPTX", "DOCX", "Link"] },
      { key: "size", label: "Size / Detail", type: "text", placeholder: "2.4 MB" },
    ],
    items: [
      { id: 1, title: "Retrospective Playbook", type: "PDF", size: "1.2 MB" },
      { id: 2, title: "Workshop Checklist", type: "DOCX", size: "540 KB" },
      { id: 3, title: "Icebreaker Cards", type: "PPTX", size: "8.4 MB" },
      { id: 4, title: "Miro Board Template", type: "Link", size: "External" },
      { id: 5, title: "Facilitation Guide Q2", type: "PDF", size: "3.1 MB" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Nav items config                                                   */
/* ------------------------------------------------------------------ */

const navMainItems: {
  page: PageKey;
  label: string;
  icon: React.ElementType;
  activeBg: string;
  hoverBg: string;
}[] = [
  { page: "overview", label: "Overview", icon: LayoutDashboard, activeBg: "bg-brand-yellow", hoverBg: "hover:bg-brand-yellow" },
  { page: "sessions", label: "Sessions", icon: Calendar, activeBg: "bg-brand-peach", hoverBg: "hover:bg-brand-peach" },
  { page: "templates", label: "Templates", icon: Copy, activeBg: "bg-brand-pink", hoverBg: "hover:bg-brand-pink" },
  { page: "participants", label: "Participants", icon: Users, activeBg: "bg-brand-lavender", hoverBg: "hover:bg-brand-lavender" },
  { page: "resources", label: "Resources", icon: Folder, activeBg: "bg-brand-mint", hoverBg: "hover:bg-brand-mint" },
];

/* ------------------------------------------------------------------ */
/*  Helper: badge colour for status / role                             */
/* ------------------------------------------------------------------ */

function badgeClasses(value: string): string {
  if (value === "Upcoming" || value === "Admin")
    return "bg-brand-mint text-brand-dark border-brand-dark";
  if (value === "Completed" || value === "Facilitator")
    return "bg-brand-lavender text-brand-dark border-brand-dark";
  if (value === "Cancelled")
    return "bg-brand-pink text-brand-dark border-brand-dark";
  return "bg-gray-200 border-gray-300 text-gray-700";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DashboardPage() {
  /* state */
  const [activePage, setActivePage] = useState<PageKey>("overview");
  const [entities, setEntities] = useState(initialEntities);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [profileName, setProfileName] = useState("Amanda Seyfried");

  /* dark‑mode: read localStorage on mount */
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  /* dark‑mode: sync body class + localStorage */
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  /* derived KPI values */
  const sessionsCount = entities.sessions.items.length;
  const completedCount = entities.sessions.items.filter(
    (s) => s.status === "Completed"
  ).length;
  const upcomingCount = entities.sessions.items.filter(
    (s) => s.status === "Upcoming"
  ).length;
  const participantsKPI = entities.participants.items.length * 14 + 11;

  /* -------- helpers -------- */

  const currentConfig: EntityConfig | null =
    activePage !== "overview" && activePage !== "settings"
      ? entities[activePage]
      : null;

  const topbarTitle =
    activePage === "overview"
      ? "Dashboard Overview"
      : activePage === "settings"
      ? "Workspace Settings"
      : `${currentConfig!.label} Directory`;

  const quickActionLabel =
    activePage === "overview"
      ? "New Session"
      : currentConfig
      ? `Add ${currentConfig.label.slice(0, -1)}`
      : "";

  /* -------- navigation -------- */

  function navigate(page: PageKey) {
    setActivePage(page);
    setEditingId(null);
    setFormOpen(false);
    setFormValues({});
  }

  /* -------- CRUD helpers -------- */

  function openFormForNew() {
    if (activePage === "overview") {
      setActivePage("sessions");
    }
    setEditingId(null);
    setFormValues({});
    setFormOpen(true);
  }

  function openFormForEdit(id: number) {
    if (!currentConfig) return;
    const item = currentConfig.items.find((i) => (i as { id: number }).id === id);
    if (!item) return;
    const vals: Record<string, string> = {};
    currentConfig.fields.forEach((f) => {
      vals[f.key] = String(item[f.key] ?? "");
    });
    setEditingId(id);
    setFormValues(vals);
    setFormOpen(true);
  }

  function handleDelete(id: number) {
    if (!currentConfig) return;
    if (!confirm("Are you certain you want to remove this item? This action cannot be undone.")) return;
    const key = activePage as string;
    setEntities((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        items: prev[key].items.filter((i) => (i as { id: number }).id !== id),
      },
    }));
    if (editingId === id) {
      setEditingId(null);
      setFormValues({});
      setFormOpen(false);
    }
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (!currentConfig) return;
    const key = activePage as string;

    if (editingId !== null) {
      setEntities((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          items: prev[key].items.map((item) =>
            (item as { id: number }).id === editingId
              ? { ...item, ...formValues }
              : item
          ),
        },
      }));
    } else {
      const maxId = currentConfig.items.length
        ? Math.max(...currentConfig.items.map((i) => (i as { id: number }).id))
        : 0;
      setEntities((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          items: [{ id: maxId + 1, ...formValues }, ...prev[key].items],
        },
      }));
    }

    setEditingId(null);
    setFormValues({});
    setFormOpen(false);
  }

  function cancelEdit() {
    setEditingId(null);
    setFormValues({});
    setFormOpen(false);
  }

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */

  return (
    <div className="bg-[#F8F9FA] flex h-screen overflow-hidden antialiased">
      {/* ====================== SIDEBAR ====================== */}
      <aside className="w-72 bg-white flex-col border-r-2 border-brand-dark z-20 hidden md:flex shrink-0 h-screen">
        {/* Logo */}
        <div className="px-8 border-b-2 border-brand-dark flex items-center shrink-0 h-[88px] box-border">
          <Link
            href="/"
            className="flex items-center space-x-2 font-display font-black text-2xl tracking-tight"
          >
            <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-yellow text-[9px] font-sans font-bold">
              MT
            </span>
            <span>Media Talk</span>
          </Link>
        </div>

        {/* Nav */}
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest mb-4 px-2">
            Main Menu
          </p>
          <nav className="space-y-3">
            {navMainItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  className={`nav-item w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl border-2 text-brand-dark/80 font-bold transition-all ${
                    item.hoverBg
                  } hover:text-brand-dark hover:font-extrabold ${
                    isActive
                      ? `${item.activeBg} border-brand-dark shadow-playful-sm -translate-y-[2px] font-bold`
                      : "border-transparent"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <p className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest mt-10 mb-4 px-2">
            Settings
          </p>
          <nav className="space-y-3">
            <button
              onClick={() => navigate("settings")}
              className={`nav-item w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl border-2 text-brand-dark/80 font-bold transition-all hover:bg-gray-200 hover:text-brand-dark hover:font-extrabold ${
                activePage === "settings"
                  ? "bg-gray-200 border-brand-dark shadow-playful-sm -translate-y-[2px] font-bold"
                  : "border-transparent"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Preferences</span>
            </button>
          </nav>
        </div>

        {/* User */}
        <div className="p-6 border-t-2 border-brand-dark shrink-0">
          <div className="flex items-center space-x-3 p-3 rounded-2xl border-2 border-transparent hover:border-brand-dark hover:bg-brand-pink/20 transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-brand-yellow border-2 border-brand-dark overflow-hidden flex items-center justify-center shrink-0">
              <span className="font-bold text-sm">AS</span>
            </div>
            <div className="truncate">
              <p className="font-bold text-sm truncate">Amanda Seyfried</p>
              <p className="text-xs text-brand-dark/60 font-semibold mt-0.5 truncate">
                Admin Workspace
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ====================== MAIN CONTENT ====================== */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b-2 border-brand-dark px-6 md:px-10 py-5 flex items-center justify-between shrink-0 z-10 box-border h-[88px]">
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 bg-gray-100 rounded-lg border-2 border-brand-dark">
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-3xl font-display font-extrabold tracking-tight">
              {topbarTitle}
            </h1>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/50" />
              <input
                type="text"
                placeholder="Search workspace..."
                className="pl-12 pr-4 py-2.5 rounded-full border-2 border-brand-dark bg-gray-50 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-mint w-64 md:w-80 transition-shadow hover:shadow-playful-sm"
              />
            </div>

            <button className="w-11 h-11 rounded-full bg-brand-lavender border-2 border-brand-dark flex items-center justify-center relative hover:-translate-y-0.5 transition-transform hover:shadow-playful-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-brand-pink rounded-full border-2 border-brand-dark" />
            </button>

            {activePage !== "settings" && (
              <button
                onClick={openFormForNew}
                className="hidden md:flex px-6 py-2.5 rounded-full border-2 border-brand-dark bg-brand-dark text-white font-bold text-sm items-center space-x-2 shadow-playful hover:-translate-y-0.5 transition-transform"
              >
                <Plus className="w-4 h-4" />
                <span>{quickActionLabel}</span>
              </button>
            )}
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 box-border custom-scrollbar">
          {/* ================== OVERVIEW PAGE ================== */}
          {activePage === "overview" && (
            <div className="animate-[fadeIn_0.3s_ease-in-out]">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                {/* Total Sessions */}
                <article className="bg-white rounded-3xl border-2 border-brand-dark p-6 shadow-playful hover:shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] transition-shadow">
                  <div className="w-12 h-12 bg-brand-yellow rounded-2xl border-2 border-brand-dark flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-brand-dark/70 uppercase tracking-wider mb-1">
                    Total Sessions
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-5xl font-display font-black leading-none">
                      {sessionsCount}
                    </p>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-lg border border-green-300">
                      +12%
                    </span>
                  </div>
                </article>

                {/* Up / Done */}
                <article className="bg-brand-mint rounded-3xl border-2 border-brand-dark p-6 shadow-playful hover:shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-2xl border-2 border-brand-dark flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-brand-dark/70 uppercase tracking-wider mb-1">
                    Up / Done
                  </p>
                  <div className="flex items-end">
                    <p className="text-4xl font-display font-black leading-none">
                      {upcomingCount}{" "}
                      <span className="text-brand-dark/40 text-3xl font-bold">
                        /
                      </span>{" "}
                      {completedCount}
                    </p>
                  </div>
                </article>

                {/* Participants */}
                <article className="bg-brand-lavender rounded-3xl border-2 border-brand-dark p-6 shadow-playful hover:shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-2xl border-2 border-brand-dark flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-brand-dark/70 uppercase tracking-wider mb-1">
                    Participants
                  </p>
                  <div className="flex items-end">
                    <p className="text-5xl font-display font-black leading-none">
                      {participantsKPI}
                    </p>
                  </div>
                </article>

                {/* Top Template */}
                <article className="bg-brand-pink rounded-3xl border-2 border-brand-dark p-6 shadow-playful hover:shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] transition-shadow relative overflow-hidden group">
                  <Star className="w-32 h-32 absolute -bottom-6 -right-6 text-white opacity-40 -rotate-12 fill-current group-hover:rotate-12 transition-transform duration-500" />
                  <p className="text-sm font-bold text-brand-dark/70 uppercase tracking-wider mb-2 relative z-10">
                    Top Template
                  </p>
                  <p className="text-2xl font-display font-black leading-none relative z-10 mb-4">
                    Sprint Retrospective
                  </p>
                  <span className="text-xs font-bold bg-white inline-block px-3 py-1.5 rounded-full border-2 border-brand-dark relative z-10 shadow-sm">
                    Used 12 times
                  </span>
                </article>
              </div>

              {/* Chart + Upcoming + Activity */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                {/* Engagement Chart */}
                <article className="xl:col-span-2 bg-white rounded-3xl border-2 border-brand-dark p-8 shadow-playful flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-display font-black">
                        Engagement Metrics
                      </h2>
                      <p className="text-brand-dark/60 font-semibold mt-1">
                        Average reactions &amp; chat messages per session
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-4 py-2 bg-brand-yellow rounded-xl border-2 border-brand-dark font-bold text-sm">
                      Last 7 days
                    </span>
                  </div>

                  <div className="relative flex-1 min-h-[200px] border-b-2 border-l-2 border-brand-dark flex items-end justify-between px-4 pb-0 pt-8 mt-auto">
                    {[
                      { color: "bg-brand-lavender", h: "h-[45%]" },
                      { color: "bg-brand-mint", h: "h-[70%]" },
                      { color: "bg-brand-peach", h: "h-[60%]" },
                      { color: "bg-brand-yellow", h: "h-[85%]", tooltip: true },
                      { color: "bg-brand-pink", h: "h-[65%]" },
                      { color: "bg-brand-mint", h: "h-[80%]" },
                      { color: "bg-brand-lavender", h: "h-[92%]" },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        className={`w-1/12 ${bar.color} rounded-t-xl ${bar.h} border-t-2 border-l-2 border-r-2 border-brand-dark transition-all cursor-pointer ${
                          bar.tooltip ? "relative group" : ""
                        }`}
                      >
                        {bar.tooltip && (
                          <>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-100 group-hover:-translate-y-1 transition-transform">
                              95 interactions
                            </div>
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-dark" />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between px-4 text-sm font-bold text-brand-dark/60">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (d) => (
                        <span key={d} className="w-1/12 text-center block">
                          {d}
                        </span>
                      )
                    )}
                  </div>
                </article>

                {/* Right column */}
                <div className="space-y-6 flex flex-col h-full">
                  {/* Upcoming */}
                  <article className="bg-white rounded-3xl border-2 border-brand-dark p-6 md:p-8 shadow-playful">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-display font-black">
                        Upcoming
                      </h2>
                      <button className="text-sm font-bold underline decoration-2 decoration-brand-dark underline-offset-4 hover:text-brand-pink transition-colors">
                        See all
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl border-2 border-brand-dark bg-brand-peach flex justify-between items-center group cursor-pointer hover:-translate-y-1 hover:shadow-playful-sm transition-all">
                        <div>
                          <p className="font-extrabold text-brand-dark">
                            Facilitation 101
                          </p>
                          <p className="text-xs font-bold text-brand-dark/70 mt-1.5">
                            <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                            Mar 18, 10:00 AM
                          </p>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-xl border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                          <Play className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl border-2 border-brand-dark bg-brand-mint flex justify-between items-center group cursor-pointer hover:-translate-y-1 hover:shadow-playful-sm transition-all">
                        <div>
                          <p className="font-extrabold text-brand-dark">
                            Q3 Planning
                          </p>
                          <p className="text-xs font-bold text-brand-dark/70 mt-1.5">
                            <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                            Mar 20, 2:00 PM
                          </p>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-xl border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                          <Play className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Recent Activity */}
                  <article className="bg-brand-dark text-white rounded-3xl border-2 border-brand-dark p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(201,207,254,1)] flex-1">
                    <h2 className="text-xl font-display font-black mb-6 text-brand-lavender">
                      Recent Activity
                    </h2>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-brand-lavender/20">
                      <div className="relative flex items-start space-x-4">
                        <div className="w-6 h-6 rounded-full border-2 border-brand-dark bg-brand-yellow flex items-center justify-center shrink-0 z-10 shadow-sm mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">
                            Scheduled{" "}
                            <span className="bg-brand-yellow/20 text-brand-yellow px-1.5 py-0.5 rounded">
                              Innovation Sprint
                            </span>
                          </p>
                          <p className="text-xs text-brand-lavender/60 font-bold mt-1.5">
                            2 hrs ago
                          </p>
                        </div>
                      </div>

                      <div className="relative flex items-start space-x-4">
                        <div className="w-6 h-6 rounded-full border-2 border-brand-dark bg-brand-mint flex items-center justify-center shrink-0 z-10 shadow-sm mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">
                            <span className="text-brand-mint">
                              Amina Saleh
                            </span>{" "}
                            created a template
                          </p>
                          <p className="text-xs text-brand-lavender/60 font-bold mt-1.5">
                            4 hrs ago
                          </p>
                        </div>
                      </div>

                      <div className="relative flex items-start space-x-4">
                        <div className="w-6 h-6 rounded-full border-2 border-brand-dark bg-brand-pink flex items-center justify-center shrink-0 z-10 shadow-sm mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">
                            Uploaded{" "}
                            <span className="text-brand-pink underline">
                              Checklist.pdf
                            </span>
                          </p>
                          <p className="text-xs text-brand-lavender/60 font-bold mt-1.5">
                            Yesterday
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          )}

          {/* ================== CRUD PAGES ================== */}
          {currentConfig && activePage !== "settings" && (
            <div className="h-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-[calc(100vh-140px)]">
                {/* Form Panel */}
                {formOpen && (
                  <div className="w-full lg:w-[400px] shrink-0 lg:h-full lg:overflow-y-auto hidden-scrollbar transition-all">
                    <div
                      className={`${currentConfig.themeBg} rounded-3xl border-2 border-brand-dark p-6 md:p-8 shadow-playful relative transition-colors duration-300`}
                    >
                      {/* Icon badge */}
                      <div
                        className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-white border-2 border-brand-dark flex items-center justify-center shadow-sm z-10 ${
                          editingId !== null ? "-rotate-6" : "rotate-12"
                        }`}
                      >
                        {editingId !== null ? (
                          <Edit2 className="w-5 h-5 text-brand-dark" />
                        ) : (
                          <Plus className="w-6 h-6 text-brand-dark" />
                        )}
                      </div>

                      <h3 className="text-2xl font-display font-black mb-2 text-brand-dark">
                        {editingId !== null
                          ? currentConfig.formEdit
                          : currentConfig.formCreate}
                      </h3>
                      <p className="text-sm font-bold text-brand-dark/60 mb-8">
                        {editingId !== null
                          ? "Update the details for this entry."
                          : currentConfig.formDesc}
                      </p>

                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div className="space-y-5">
                          {currentConfig.fields.map((field) => (
                            <div
                              key={field.key}
                              className={
                                field.type === "select" ? "relative" : ""
                              }
                            >
                              <label className="text-xs font-bold text-brand-dark/70 block mb-2 uppercase tracking-wider">
                                {field.label}
                              </label>
                              {field.type === "select" ? (
                                <>
                                  <select
                                    name={field.key}
                                    required
                                    value={formValues[field.key] ?? ""}
                                    onChange={(e) =>
                                      setFormValues((p) => ({
                                        ...p,
                                        [field.key]: e.target.value,
                                      }))
                                    }
                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-brand-dark bg-white/90 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-dark/20 font-bold text-sm appearance-none cursor-pointer transition-all shadow-sm"
                                  >
                                    {field.options!.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                  <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 pointer-events-none opacity-50" />
                                </>
                              ) : (
                                <input
                                  type={field.type}
                                  name={field.key}
                                  required
                                  placeholder={field.placeholder}
                                  value={formValues[field.key] ?? ""}
                                  onChange={(e) =>
                                    setFormValues((p) => ({
                                      ...p,
                                      [field.key]: e.target.value,
                                    }))
                                  }
                                  className="w-full px-4 py-3.5 rounded-xl border-2 border-brand-dark bg-white/90 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-dark/20 font-bold text-sm transition-all shadow-sm"
                                />
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 flex flex-col gap-3">
                          <button
                            type="submit"
                            className={`w-full py-4 rounded-2xl border-2 border-brand-dark font-extrabold transition-colors shadow-playful-sm text-base ${
                              editingId !== null
                                ? "bg-brand-yellow text-brand-dark hover:brightness-95"
                                : "bg-brand-dark text-white hover:bg-black"
                            }`}
                          >
                            {editingId !== null
                              ? "Save Changes"
                              : `Create ${currentConfig.label.slice(0, -1)}`}
                          </button>
                          <button
                            type="button"
                            onClick={cancelEdit}
                            className="w-full py-3.5 rounded-2xl border-2 border-brand-dark bg-white font-bold hover:bg-gray-50 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {/* Table */}
                <div className="flex-1 bg-white rounded-3xl border-2 border-brand-dark shadow-playful flex flex-col lg:h-full overflow-hidden">
                  <div
                    className={`${currentConfig.themeBg} p-5 md:p-6 border-b-2 border-brand-dark flex justify-between items-center shrink-0 transition-colors duration-300`}
                  >
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-display font-black">
                        All {currentConfig.label}
                      </h3>
                      <span className="hidden sm:inline-block px-3 py-1 bg-white border-2 border-brand-dark rounded-full text-xs font-bold">
                        {currentConfig.items.length} items
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={openFormForNew}
                        className="px-4 py-2.5 bg-brand-dark text-white rounded-xl border-2 border-brand-dark hover:bg-black transition-colors shadow-sm flex items-center space-x-2 font-bold text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline-block">Add New</span>
                      </button>
                      <button className="p-2.5 bg-white rounded-xl border-2 border-brand-dark hover:bg-gray-100 transition-colors shadow-sm hidden sm:block">
                        <Filter className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 bg-white rounded-xl border-2 border-brand-dark hover:bg-gray-100 transition-colors shadow-sm">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto custom-scrollbar p-0 bg-white">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead className="bg-white/95 backdrop-blur border-b-2 border-brand-dark sticky top-0 z-10">
                        <tr>
                          {currentConfig.fields.map((f) => (
                            <th
                              key={f.key}
                              className="text-left px-6 md:px-8 py-5 text-xs font-black uppercase tracking-widest text-brand-dark/50 whitespace-nowrap bg-white"
                            >
                              {f.label}
                            </th>
                          ))}
                          <th className="text-right px-6 md:px-8 py-5 text-xs font-black uppercase tracking-widest text-brand-dark/50 bg-white">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white [&>*:last-child]:border-b-0">
                        {currentConfig.items.length === 0 ? (
                          <tr>
                            <td
                              colSpan={currentConfig.fields.length + 1}
                              className="px-6 py-12 text-center text-brand-dark/50 font-bold"
                            >
                              No entries found.
                            </td>
                          </tr>
                        ) : (
                          currentConfig.items.map((item) => {
                            const id = (item as { id: number }).id;
                            return (
                              <tr
                                key={id}
                                className="border-b border-black/10 hover:bg-gray-50 transition-colors group cursor-pointer"
                              >
                                {currentConfig.fields.map((field, idx) => {
                                  const val = item[field.key];
                                  const isFirst = idx === 0;
                                  const isStatusOrRole =
                                    field.key === "status" ||
                                    field.key === "role";
                                  const isType = field.key === "type";

                                  return (
                                    <td
                                      key={field.key}
                                      className={`px-6 md:px-8 py-5 text-sm font-bold max-w-[200px] truncate text-brand-dark/80 group-hover:text-brand-dark ${
                                        isFirst
                                          ? "text-brand-dark font-black text-base"
                                          : ""
                                      }`}
                                    >
                                      {isStatusOrRole ? (
                                        <span
                                          className={`inline-block px-3 py-1 ${badgeClasses(
                                            String(val)
                                          )} rounded-full text-xs font-black border-2`}
                                        >
                                          {String(val)}
                                        </span>
                                      ) : isType ? (
                                        <span className="inline-flex items-center gap-2">
                                          <FileText className="w-4 h-4 opacity-50" />
                                          {String(val)}
                                        </span>
                                      ) : (
                                        String(val)
                                      )}
                                    </td>
                                  );
                                })}
                                <td className="px-6 md:px-8 py-5 text-right">
                                  <div className="flex items-center justify-end space-x-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                    <button
                                      onClick={() => openFormForEdit(id)}
                                      className="w-9 h-9 rounded-xl bg-white border-2 border-brand-dark flex items-center justify-center transition-all text-brand-dark hover:bg-brand-yellow shadow-sm hover:shadow-playful-sm hover:-translate-y-0.5"
                                      title="Edit"
                                    >
                                      <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDelete(id)}
                                      className="w-9 h-9 rounded-xl bg-white border-2 border-brand-dark flex items-center justify-center transition-all text-red-600 hover:text-brand-dark hover:bg-brand-pink shadow-sm hover:shadow-playful-sm hover:-translate-y-0.5"
                                      title="Delete"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================== SETTINGS PAGE ================== */}
          {activePage === "settings" && (
            <div className="pb-10 animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-extrabold tracking-tight mb-2">
                  Settings &amp; Preferences
                </h2>
                <p className="text-brand-dark/60 font-semibold">
                  Customize your dashboard experience.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Appearance */}
                <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 shadow-playful">
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                    <Palette className="w-5 h-5 mr-3 text-brand-dark" />{" "}
                    Appearance
                  </h3>

                  <div className="flex items-center justify-between py-5 border-b-2 border-brand-dark/10">
                    <div>
                      <p className="font-bold text-brand-dark">Dark Mode</p>
                      <p className="text-sm text-brand-dark/60 font-semibold mt-1">
                        Switch to a dark optimized color theme
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode((p) => !p)}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-brand-dark after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-brand-dark after:border-2 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-dark border-2 border-brand-dark shadow-sm" />
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-5 border-b-2 border-brand-dark/10">
                    <div>
                      <p className="font-bold text-brand-dark">
                        Reduced UI Animations
                      </p>
                      <p className="text-sm text-brand-dark/60 font-semibold mt-1">
                        Disable playful bouncing and hover effects
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-brand-dark after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-brand-dark after:border-2 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-mint border-2 border-brand-dark shadow-sm" />
                    </label>
                  </div>
                </div>

                {/* Profile */}
                <div className="bg-brand-yellow rounded-3xl border-2 border-brand-dark p-8 shadow-playful">
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                    <User className="w-5 h-5 mr-3 text-brand-dark" /> Profile
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-brand-dark/70 block mb-2 uppercase tracking-wider">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark bg-white font-bold text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-brand-dark/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-brand-dark/70 block mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value="amanda@mediatalk.us"
                        disabled
                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark bg-white/50 text-brand-dark/60 font-bold text-sm"
                      />
                    </div>
                    <button className="mt-4 w-full py-3 rounded-xl border-2 border-brand-dark bg-brand-dark text-white font-bold shadow-playful-sm hover:-translate-y-0.5 transition-transform flex items-center justify-center space-x-2">
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
