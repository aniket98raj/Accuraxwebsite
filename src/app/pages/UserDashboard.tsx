import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../context/AuthContext";
import type { Subscription } from "../../lib/database.types";
import {
  User,
  CreditCard,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  ChevronRight,
  LogOut,
  RefreshCw,
  ShoppingCart,
  Activity,
  Mail,
  Phone,
  Edit2,
  Save,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";

const PLAN_META: Record<
  string,
  {
    emoji: string;
    subtitle: string;
    color: string;
    borderColor: string;
    textColor: string;
    dashboardPath: string;
  }
> = {
  GODZILLA: {
    emoji: "🦖",
    subtitle: "High Risk Growth Model",
    color: "from-orange-500/10 to-red-600/10",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    dashboardPath: "/dashboard/godzilla",
  },
  WOLF: {
    emoji: "🐺",
    subtitle: "Loss Recovery Model",
    color: "from-blue-500/10 to-purple-600/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    dashboardPath: "/dashboard/wolf",
  },
  TURTLE: {
    emoji: "🐢",
    subtitle: "Capital Protection Model",
    color: "from-green-500/10 to-teal-600/10",
    borderColor: "border-green-500/30",
    textColor: "text-teal-400",
    dashboardPath: "/dashboard/turtle",
  },
};

const STATUS_CONFIG = {
  active: {
    icon: CheckCircle,
    label: "Active",
    class: "text-green-400 bg-green-400/10 border-green-400/30",
  },
  expired: {
    icon: XCircle,
    label: "Expired",
    class: "text-red-400 bg-red-400/10 border-red-400/30",
  },
  cancelled: {
    icon: XCircle,
    label: "Cancelled",
    class: "text-gray-400 bg-gray-400/10 border-gray-400/30",
  },
};

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function daysLeft(expiresAt: string | null): number | null {
  if (!expiresAt) return null;
  const diff = new Date(expiresAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function UserDashboard() {
  const { user, profile, signOut, updateProfile, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<"subscriptions" | "profile">(
    "subscriptions"
  );

  // Profile editing
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(profile?.full_name ?? "");
  const [editPhone, setEditPhone] = useState(profile?.phone ?? "");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  const fetchSubscriptions = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setSubscriptions(data as Subscription[]);
    }
    setLoading(false);
    setRefreshing(false);
  }, [user]);

  useEffect(() => {
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  useEffect(() => {
    if (profile) {
      setEditName(profile.full_name ?? "");
      setEditPhone(profile.phone ?? "");
    }
  }, [profile]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchSubscriptions();
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    setSaveMsg(null);
    const { error } = await updateProfile({
      full_name: editName,
      phone: editPhone,
    });
    setSaving(false);
    if (error) {
      setSaveMsg("Error: " + error);
    } else {
      await refreshProfile();
      setSaveMsg("Profile updated successfully.");
      setEditing(false);
      setTimeout(() => setSaveMsg(null), 3000);
    }
  };

  const activeSubscriptions = subscriptions.filter((s) => s.status === "active");
  const pastSubscriptions = subscriptions.filter((s) => s.status !== "active");

  const initials =
    profile?.full_name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) ||
    user?.email?.[0]?.toUpperCase() ||
    "U";

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold text-xl">{initials}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {profile?.full_name || "My Dashboard"}
              </h1>
              <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            className="flex items-center gap-2 bg-transparent border border-gray-700 text-gray-400 hover:border-red-500/50 hover:text-red-400 transition-all self-start sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Active Plans",
              value: activeSubscriptions.length,
              icon: Activity,
              color: "text-green-400",
            },
            {
              label: "Total Purchased",
              value: subscriptions.length,
              icon: ShoppingCart,
              color: "text-blue-400",
            },
            {
              label: "Total Spent",
              value:
                "₹" +
                subscriptions
                  .filter((s) => s.status === "active")
                  .reduce((sum, s) => sum + s.plan_price, 0),
              icon: CreditCard,
              color: "text-purple-400",
            },
            {
              label: "Member Since",
              value: formatDate(user?.created_at ?? null),
              icon: Calendar,
              color: "text-orange-400",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-gray-500 text-xs">{stat.label}</span>
              </div>
              <p className="text-white font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800 mb-6">
          {[
            { key: "subscriptions", label: "My Subscriptions" },
            { key: "profile", label: "Profile Settings" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(tab.key as "subscriptions" | "profile")
              }
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- SUBSCRIPTIONS TAB --- */}
        {activeTab === "subscriptions" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-bold text-lg">
                {activeSubscriptions.length > 0
                  ? `${activeSubscriptions.length} Active Subscription${activeSubscriptions.length > 1 ? "s" : ""}`
                  : "No Active Subscriptions"}
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
                  />
                  Refresh
                </button>
                <Button
                  onClick={() => navigate("/pricing")}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Plan
                </Button>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : subscriptions.length === 0 ? (
              // Empty State
              <div className="text-center py-20 bg-gray-900/50 border border-gray-800 rounded-2xl">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-white font-bold text-xl mb-2">
                  No Subscriptions Yet
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  Purchase a subscription plan to access trading dashboards and
                  educational content.
                </p>
                <Button
                  onClick={() => navigate("/pricing")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-11"
                >
                  Explore Plans
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Active Subscriptions */}
                {activeSubscriptions.length > 0 && (
                  <div>
                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">
                      Active
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeSubscriptions.map((sub) => {
                        const meta = PLAN_META[sub.plan_name];
                        const status = STATUS_CONFIG[sub.status];
                        const StatusIcon = status.icon;
                        const remaining = daysLeft(sub.expires_at);

                        return (
                          <div
                            key={sub.id}
                            className={`relative bg-gradient-to-br ${meta.color} border ${meta.borderColor} rounded-2xl p-6 overflow-hidden`}
                          >
                            {/* Glow orb */}
                            <div
                              className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${meta.color} opacity-30 blur-2xl`}
                            />

                            <div className="relative">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <div className="text-3xl mb-1">
                                    {meta.emoji}
                                  </div>
                                  <h3
                                    className={`font-bold text-lg ${meta.textColor}`}
                                  >
                                    {sub.plan_name}
                                  </h3>
                                  <p className="text-gray-400 text-sm">
                                    {meta.subtitle}
                                  </p>
                                </div>
                                <div
                                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${status.class}`}
                                >
                                  <StatusIcon className="w-3.5 h-3.5" />
                                  {status.label}
                                </div>
                              </div>

                              <div className="space-y-2 mb-5">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Price</span>
                                  <span className="text-white font-medium">
                                    ₹{sub.plan_price}/mo
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Started</span>
                                  <span className="text-gray-300">
                                    {formatDate(sub.started_at)}
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Expires</span>
                                  <span className="text-gray-300">
                                    {formatDate(sub.expires_at)}
                                  </span>
                                </div>
                                {remaining !== null && (
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                      Remaining
                                    </span>
                                    <span
                                      className={`font-medium ${remaining <= 5 ? "text-red-400" : remaining <= 10 ? "text-yellow-400" : "text-green-400"}`}
                                    >
                                      {remaining} day{remaining !== 1 ? "s" : ""}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Days remaining bar */}
                              {remaining !== null && sub.expires_at && (
                                <div className="mb-5">
                                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                                    <div
                                      className={`h-1.5 rounded-full ${remaining <= 5 ? "bg-red-500" : remaining <= 10 ? "bg-yellow-500" : "bg-green-500"}`}
                                      style={{
                                        width: `${Math.min(100, (remaining / 30) * 100)}%`,
                                      }}
                                    />
                                  </div>
                                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>0d</span>
                                    <span>30d</span>
                                  </div>
                                </div>
                              )}

                              <div className="flex gap-2">
                                <Button
                                  onClick={() =>
                                    navigate(meta.dashboardPath)
                                  }
                                  className={`flex-1 h-9 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-1`}
                                >
                                  Open Dashboard
                                  <ChevronRight className="w-4 h-4" />
                                </Button>
                                <Button
                                  onClick={() =>
                                    navigate("/pricing", {
                                      state: { planName: sub.plan_name },
                                    })
                                  }
                                  className="h-9 px-3 text-sm bg-transparent border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all"
                                >
                                  Renew
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Past Subscriptions */}
                {pastSubscriptions.length > 0 && (
                  <div>
                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">
                      Past Subscriptions
                    </h3>
                    <div className="space-y-3">
                      {pastSubscriptions.map((sub) => {
                        const meta = PLAN_META[sub.plan_name];
                        const status = STATUS_CONFIG[sub.status];
                        const StatusIcon = status.icon;

                        return (
                          <div
                            key={sub.id}
                            className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center justify-between opacity-60"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{meta.emoji}</span>
                              <div>
                                <p className="text-white font-medium text-sm">
                                  {sub.plan_name}
                                </p>
                                <p className="text-gray-500 text-xs">
                                  {formatDate(sub.started_at)} →{" "}
                                  {formatDate(sub.expires_at)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400 text-sm">
                                ₹{sub.plan_price}
                              </span>
                              <div
                                className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs ${status.class}`}
                              >
                                <StatusIcon className="w-3 h-3" />
                                {status.label}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* --- PROFILE TAB --- */}
        {activeTab === "profile" && (
          <div className="max-w-xl">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-lg">
                  Profile Settings
                </h2>
                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditing(false);
                      setEditName(profile?.full_name ?? "");
                      setEditPhone(profile?.phone ?? "");
                    }}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-gray-200 text-sm transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                )}
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">
                    {initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    {profile?.full_name || "User"}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Member since {formatDate(user?.created_at ?? null)}
                  </p>
                </div>
              </div>

              {saveMsg && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    saveMsg.startsWith("Error")
                      ? "bg-red-900/20 border border-red-500/30 text-red-400"
                      : "bg-green-900/20 border border-green-500/30 text-green-400"
                  }`}
                >
                  {saveMsg}
                </div>
              )}

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="block w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  ) : (
                    <p className="text-white py-3">
                      {profile?.full_name || "—"}
                    </p>
                  )}
                </div>

                {/* Email (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <p className="text-gray-400 py-3 text-sm">
                    {user?.email}
                    <span className="ml-2 text-xs text-gray-600">
                      (cannot be changed)
                    </span>
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  {editing ? (
                    <input
                      type="tel"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      className="block w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="+91 9876543210"
                    />
                  ) : (
                    <p className="text-white py-3">
                      {profile?.phone || "—"}
                    </p>
                  )}
                </div>

                {/* Last login */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Last Sign In
                  </label>
                  <p className="text-gray-400 py-3 text-sm">
                    {user?.last_sign_in_at
                      ? new Date(user.last_sign_in_at).toLocaleString("en-IN")
                      : "—"}
                  </p>
                </div>

                {editing && (
                  <Button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all"
                  >
                    {saving ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Save className="w-4 h-4" />
                        Save Changes
                      </div>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
