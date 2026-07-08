import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  PieChart, Pie, Cell
} from "recharts";

const valuationData = [
  { metric: "P/E (x)", TCS: 13.7, Infosys: 14.1 },
  { metric: "P/B (x)", TCS: 6.7, Infosys: 4.6 },
];

const profitabilityData = [
  { metric: "ROE %", TCS: 51.8, Infosys: 31.9 },
  { metric: "ROCE %", TCS: 63.0, Infosys: 40.0 },
  { metric: "OPM %", TCS: 27.0, Infosys: 24.0 },
  { metric: "Net Margin %", TCS: 19.8, Infosys: 16.5 },
];

const growthData = [
  { metric: "Revenue CAGR 5Y", TCS: 10, Infosys: 12 },
  { metric: "Profit CAGR 5Y", TCS: 9, Infosys: 9 },
  { metric: "Profit Growth TTM", TCS: 8, Infosys: 13 },
];

const peerData = [
  { name: "TCS", PE: 13.7, ROE: 51.8, MCap: 716423 },
  { name: "Infosys", PE: 14.1, ROE: 31.9, MCap: 424910 },
  { name: "HCLTech", PE: 20.5, ROE: 24.0, MCap: 356000 },
  { name: "Wipro", PE: 13.0, ROE: 17.5, MCap: 172115 },
];

const holdingTCS = [
  { name: "Promoter", value: 71.77 },
  { name: "FII", value: 12.1 },
  { name: "DII", value: 10.9 },
  { name: "Public/Other", value: 5.23 },
];
const holdingINFY = [
  { name: "Promoter", value: 14.38 },
  { name: "FII", value: 32.5 },
  { name: "DII", value: 34.9 },
  { name: "Public/Other", value: 18.22 },
];
const COLORS = ["#0f172a", "#3b82f6", "#94a3b8", "#cbd5e1"];

const radarData = [
  { metric: "ROE", TCS: 100, Infosys: 62 },
  { metric: "ROCE", TCS: 100, Infosys: 63 },
  { metric: "Margin", TCS: 100, Infosys: 89 },
  { metric: "Div Yield", TCS: 71, Infosys: 100 },
  { metric: "Value (inv P/B)", TCS: 69, Infosys: 100 },
  { metric: "Growth 5Y", TCS: 83, Infosys: 100 },
];

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-slate-700 mb-3 border-b border-slate-200 pb-1">{title}</h2>
      {children}
    </div>
  );
}

export default function DetailedComparison() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white font-sans">
      <h1 className="text-3xl font-bold text-slate-900 mb-1">TCS vs Infosys — Deep Dive</h1>
      <p className="text-slate-500 mb-8 text-sm">Fundamentals as of early July 2026 · Source: screener.in, company filings · Educational, not investment advice</p>

      <Section title="1. Valuation">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={valuationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="TCS" fill="#0f172a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Infosys" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2">Both trade at similar P/E (~14x, near 4-year lows for the sector), but TCS carries a richer P/B given its higher ROE.</p>
      </Section>

      <Section title="2. Profitability">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profitabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="TCS" fill="#0f172a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Infosys" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2">TCS is meaningfully more capital-efficient (ROE 51.8% vs 30.8%) and holds a margin edge across operating and net levels.</p>
      </Section>

      <Section title="3. Growth Trajectory">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="TCS" fill="#0f172a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Infosys" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2">Infosys shows stronger recent (TTM) profit momentum; both had similar 5Y CAGRs historically.</p>
      </Section>

      <Section title="4. Overall Profile (Normalized, 100 = stronger metric)">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis tick={{ fontSize: 10 }} />
              <Radar name="TCS" dataKey="TCS" stroke="#0f172a" fill="#0f172a" fillOpacity={0.35} />
              <Radar name="Infosys" dataKey="Infosys" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.35} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2">TCS leads on quality metrics (ROE, ROCE, margin); Infosys leads on value and growth-momentum metrics. This is a relative visual, not a scoring recommendation.</p>
      </Section>

      <Section title="5. Peer Set — P/E vs ROE (bubble size = Market Cap)">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={peerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} label={{ value: "P/E", angle: -90, position: "insideLeft", fontSize: 11 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} label={{ value: "ROE %", angle: 90, position: "insideRight", fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="PE" fill="#94a3b8" name="P/E (x)" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="ROE" fill="#3b82f6" name="ROE (%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2">Across the top 4 listed Indian IT names, TCS combines the highest ROE with a below-average P/E — a quality-at-reasonable-price setup relative to peers. HCLTech and Wipro figures are approximate.</p>
      </Section>

      <Section title="6. Shareholding Pattern">
        <div className="grid grid-cols-2 gap-6">
          <div className="h-64">
            <p className="text-center text-sm font-medium text-slate-600 mb-1">TCS</p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={holdingTCS} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={{ fontSize: 10 }}>
                  {holdingTCS.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="h-64">
            <p className="text-center text-sm font-medium text-slate-600 mb-1">Infosys</p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={holdingINFY} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={{ fontSize: 10 }}>
                  {holdingINFY.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2">TCS has concentrated Tata Group promoter ownership (71.8%); Infosys is institutionally-owned with low promoter float (14.4%) and heavier FII/DII presence.</p>
      </Section>

      <p className="text-xs text-slate-400 mt-4 border-t border-slate-200 pt-4">
        Sources: screener.in, company Q4 FY26 filings, brokerage commentary (JM Financial, JPMorgan, Nuvama). Figures approximate where noted.
        This is a view of the fundamentals for educational purposes only — not investment advice, not a buy/sell/hold recommendation. Verify independently.
      </p>
    </div>
  );
}
