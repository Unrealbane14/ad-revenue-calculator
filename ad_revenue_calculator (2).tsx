import React, { useState } from 'react';
import { DollarSign, TrendingUp, Info } from 'lucide-react';

export default function AdRevenueCalculator() {
  const [pageviews, setPageviews] = useState(50000);
  const [rpm, setRpm] = useState(15);
  const [growthRate, setGrowthRate] = useState(10);
  const [showGrowth, setShowGrowth] = useState(false);

  const monthlyRevenue = (pageviews / 1000) * rpm;
  const yearlyRevenue = monthlyRevenue * 12;
  
  const projectedRevenue = showGrowth 
    ? Array.from({length: 12}, (_, i) => {
        const month = i + 1;
        const projectedPageviews = pageviews * Math.pow(1 + growthRate/100, month);
        return (projectedPageviews / 1000) * rpm;
      })
    : [];
  
  const yearEndRevenue = showGrowth ? projectedRevenue.reduce((a, b) => a + b, 0) : 0;

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const handleDownload = () => {
    const guideContent = `THE RPM OPTIMIZATION PLAYBOOK
A No-BS Guide to Maximizing Your Ad Revenue Per 1,000 Pageviews

================================================================================

EXECUTIVE SUMMARY

RPM isn't fixed. It's a lever you control through strategic decisions about traffic, placement, and platform selection. This guide delivers actionable tactics that move the needle—not theory, not fluff.

Expected outcome: 20-150% RPM increase within 90 days when executed systematically.
Time investment: 10-20 hours implementation, ongoing optimization.
Difficulty level: Beginner to intermediate. No coding required for most strategies.

================================================================================

SECTION 1: UNDERSTANDING THE RPM FORMULA (5-Minute Foundation)

THE CORE EQUATION:
RPM = (Total Earnings ÷ Total Pageviews) × 1,000

WHAT ACTUALLY DRIVES RPM:

Your RPM is the output of four variables:

1. Ad Network Performance – Which platform, what deal terms
2. Traffic Quality – Geography, device, intent, engagement
3. Content Vertical – Some niches pay 10x others
4. Site Optimization – Placement, viewability, user experience

You can't control all four equally, but you can optimize each systematically.

================================================================================

SECTION 2: QUICK WINS (Implementation Time: 2-5 Hours)

TACTIC 1: Fix Your Ad Viewability (Impact: +15-30% RPM)

The Problem: Ads below the fold or in sidebar dead zones generate impressions but not revenue.

The Fix:
• Place first ad unit within first 300 pixels of content
• Insert in-content ads every 500-800 words (not at the end)
• Use sticky sidebar ads (desktop) and anchor ads (mobile)
• Remove ads from low-engagement pages (check bounce rate >80%)

Measurement: Use Google Ad Manager or your network's viewability reports. Target >70% viewability rate.

---

TACTIC 2: Block Low-Value Ad Categories (Impact: +10-25% RPM)

The Problem: Some ad categories pay 70% less than others but fill inventory.

The Fix:
• Block: Dating apps, mobile games, low-tier CPA offers, crypto schemes
• Allow: Financial services, SaaS, education, premium consumer brands
• Test block lists monthly—seasonality affects category value

Platform-Specific:
• AdSense: Blocking controls → Ad serving → All my ads
• Mediavine: Dashboard → Ad settings → Blocked categories
• Ezoic: Mediation → Ad Exchange settings

---

TACTIC 3: Optimize Ad Density Without Killing UX (Impact: +20-40% RPM)

The Problem: Too few ads = money left on table. Too many = policy violations and user exodus.

The Sweet Spot Formula:
• Articles under 800 words: 2-3 ad units
• Articles 800-1500 words: 4-5 ad units
• Articles 1500+ words: 6-8 ad units

Placement Blueprint:
1. Leaderboard (top of content)
2. In-content ad (after 1st paragraph)
3. In-content ad (mid-article)
4. In-content ad (before conclusion)
5. Sidebar (2-3 stacked units)
6. End-of-content recommendation unit

Red Flag: If time-on-page drops >15%, you've oversaturated.

================================================================================

SECTION 3: TRAFFIC QUALITY OPTIMIZATION (Implementation: 2-4 Weeks)

TACTIC 4: Geographic Traffic Arbitrage (Impact: +40-150% RPM)

The Reality: US traffic pays 3-5x more than tier-3 countries.

RPM by Geography (Typical Display Ads):
• US, Canada, UK, Australia: $15-$35
• Western Europe: $10-$20
• Eastern Europe, Latin America: $4-$10
• Asia (non-Japan), Middle East, Africa: $2-$6

Strategic Moves:
1. Audit current traffic sources in Google Analytics
2. Identify high-RPM countries where you underindex
3. Create content targeting those markets specifically
4. Double down on topics with US search volume

Example: Instead of "best budget phones," target "best budget phones USA"

---

TACTIC 5: Device Mix Optimization (Impact: +15-35% RPM)

The Data: Desktop RPM typically runs 40-60% higher than mobile.

Why: More screen real estate, better viewability, higher engagement, premium advertisers target desktop.

Strategic Approach:
• Audit device mix in Analytics
• If you're 80%+ mobile, you're leaving money on table
• Create content that appeals to desktop users: long-form guides, data-heavy analysis, comparison tables, tools/calculators
• Optimize site speed for desktop

Pro Move: Build evergreen SEO content that ranks for commercial intent keywords—these skew desktop naturally.

---

TACTIC 6: Session Depth Engineering (Impact: +25-50% RPM)

The Mechanism: Users who view multiple pages generate more ad impressions AND signal higher engagement (which increases bid prices).

Tactics to Increase Pages/Session:
• Internal linking strategy (3-5 contextual links per article)
• Related posts widgets (above the fold at article end)
• Topic cluster architecture (pillar pages + cluster content)
• Series content ("Part 1 of 3")
• Table of contents with jump links

Target Metric: 2+ pages per session

================================================================================

SECTION 4: NETWORK & MONETIZATION STRATEGY (Implementation: 1-4 Weeks)

TACTIC 7: Graduate to Premium Ad Networks (Impact: +50-150% RPM)

THE LADDER:

Tier 1: $0-10K pageviews/month
• Google AdSense ($3-$12 RPM)
• Media.net (similar to AdSense)
• Action: Focus on traffic growth, not optimization

Tier 2: 10K-50K pageviews/month
• Ezoic ($8-$20 RPM)
• MonetizeMore
• Action: Apply immediately, implement header bidding

Tier 3: 50K+ pageviews/month
• Mediavine ($15-$30 RPM) [Requires 50K sessions/month]
• AdThrive ($20-$40 RPM) [Requires 100K pageviews/month]
• Action: These networks do the heavy lifting

Application Strategy:
1. Clean up thin content before applying
2. Ensure policy compliance
3. Have at least 25-30 quality articles published
4. Don't pad stats—networks verify everything

---

TACTIC 8: Enable Header Bidding (Impact: +20-40% RPM)

What It Is: Multiple ad exchanges bid on your inventory simultaneously instead of waterfall method.

Why It Matters: Competition drives up prices. More bidders = higher winning bid = higher RPM.

Implementation:
• Ezoic users: Already included (automatic)
• Mediavine/AdThrive users: Already included (automatic)
• AdSense users: Use Prebid.js wrapper or switch to Ezoic

Reality Check: If you're on AdSense alone without header bidding, you're leaving 30-50% on the table.

---

TACTIC 9: Optimize Ad Refresh Strategy (Impact: +15-30% RPM)

The Concept: Refresh ads for users actively engaged on page (legal, policy-compliant).

Rules:
• Only refresh if user is actively viewing (in viewport)
• Minimum 30-second intervals between refreshes
• Maximum 3-4 refreshes per session
• Stop refresh on user inactivity

Networks That Handle This:
• Mediavine (automatic)
• Ezoic (configurable)
• AdSense (not supported—another reason to upgrade)

Warning: Aggressive refresh = policy violations and bans. Follow network guidelines strictly.

================================================================================

SECTION 5: CONTENT & NICHE STRATEGY (Long-Term Play)

TACTIC 10: Target High-RPM Content Verticals (Impact: +100-300% RPM)

The Brutal Truth: Not all content is created equal in advertiser eyes.

HIGH-RPM NICHES ($20-$50+ RPM):
• Personal finance, investing, credit cards
• Insurance, mortgages, loans
• B2B SaaS, business tools
• Legal services
• Higher education
• Home improvement (high-value projects)
• Web hosting, VPNs, tech services

MEDIUM-RPM NICHES ($10-$20 RPM):
• Health and wellness
• Parenting and family
• DIY and crafts
• Travel (commercial intent)
• Food (recipe content with product tie-ins)

LOW-RPM NICHES ($3-$10 RPM):
• Entertainment, celebrity gossip
• Viral content, memes
• General lifestyle
• Gaming news
• Sports news

Strategic Decision:
• If you're in low-RPM niche: Diversify into adjacent high-RPM topics
• If you're building from scratch: Choose wisely upfront
• If you're established: Add high-RPM content pillars

---

TACTIC 11: Commercial Intent Keyword Strategy (Impact: +30-60% RPM)

The Insight: Users searching with buyer intent attract higher-paying ads.

Commercial Intent Signals:
• "Best [product]"
• "Review" or "vs" comparisons
• "[Product] discount code"
• "How to choose [product]"
• "[Service] near me"

Implementation:
1. Audit current keywords in Search Console
2. Identify top 20% revenue-generating pages
3. Double down on that content type
4. Build more commercial intent content in your niche

Example Transformation:
• Low intent: "What is a credit score" → $5 RPM
• High intent: "Best credit cards for building credit" → $35 RPM

================================================================================

SECTION 6: TECHNICAL OPTIMIZATION (Implementation: 3-7 Days)

TACTIC 12: Site Speed Optimization (Impact: +15-25% RPM)

The Connection: Faster sites = better user experience = lower bounce rate = more ad impressions = higher RPM.

Critical Metrics:
• Largest Contentful Paint: <2.5 seconds
• First Input Delay: <100ms
• Cumulative Layout Shift: <0.1

Quick Wins:
1. Use a lightweight theme
2. Optimize images (WebP format, lazy loading)
3. Use a CDN (Cloudflare free tier works)
4. Minimize plugins
5. Enable caching

Test: PageSpeed Insights, GTmetrix

---

TACTIC 13: Mobile Optimization Deep Dive (Impact: +20-35% mobile RPM)

The Reality: 70% of traffic is mobile but generates 40% less RPM. You must optimize.

Mobile-Specific Tactics:
• Use responsive ads (adapt to screen size)
• Implement anchor/sticky ads (bottom of screen)
• Reduce ad size on mobile (300×250 not 728×90)
• Faster mobile load times
• Test on actual devices, not just browser resize

Ad Placement Mobile vs Desktop:
• Desktop: Sidebar heavy
• Mobile: In-content heavy (no sidebar to use)

================================================================================

SECTION 7: A/B TESTING & CONTINUOUS OPTIMIZATION

TACTIC 14: Systematic Testing Framework (Ongoing)

What to Test (In Priority Order):

1. Ad placement (week 1-2)
   • Above vs below fold
   • In-content position variations
   • Sidebar stack configurations

2. Ad formats (week 3-4)
   • Display vs native
   • Video ads integration
   • Matched content units

3. Ad density (week 5-6)
   • Add/remove units incrementally
   • Test against user metrics

4. Content length (week 7-8)
   • Short vs long-form performance
   • RPM correlation analysis

Testing Methodology:
• Change ONE variable at a time
• Run tests for minimum 2 weeks
• Require statistical significance
• Document everything

Platforms That Make This Easy:
• Ezoic (AI-powered automatic testing)
• Google Optimize (manual but free)
• AdThrive/Mediavine (built-in optimization)

================================================================================

SECTION 8: SCALING STRATEGY (90-Day Roadmap)

MONTH 1: Foundation
• Audit current setup (traffic, RPM, network)
• Implement quick wins (Tactics 1-3)
• Apply to better network if eligible
• Fix technical issues (speed, mobile)

MONTH 2: Optimization
• Implement traffic quality tactics (Tactics 4-6)
• Start A/B testing ad placements
• Create 5-10 high-RPM content pieces
• Analyze top-performing pages, replicate

MONTH 3: Scale
• Launch content production in high-RPM verticals
• Optimize top 20% of traffic pages aggressively
• Diversify traffic sources
• Evaluate network upgrade path

================================================================================

SECTION 9: ADVANCED TACTICS (For Experienced Publishers)

TACTIC 15: Seasonal RPM Arbitrage

The Pattern: RPM peaks Q4 (holiday shopping), dips Q1.

Strategy:
• Build inventory Q1-Q3 (cheap traffic acquisition)
• Harvest Q4 (premium RPMs)
• Typical Q4 lift: +30-70% RPM vs annual average

---

TACTIC 16: Programmatic Direct Deals

For sites with 500K+ monthly pageviews:
• Negotiate direct deals with advertisers
• Bypass RTB auction (guaranteed rates)
• Typical floor: $25-$50 RPM minimum

How: Contact brands in your vertical, pitch sponsored ad inventory.

================================================================================

SECTION 10: COMMON MISTAKES (Avoid These)

MISTAKE 1: Chasing Traffic at Expense of Quality
Low-value viral traffic dilutes RPM. 100K worthless pageviews < 20K quality pageviews.

MISTAKE 2: Over-Optimizing Ad Density
User experience degradation kills long-term revenue. If bounce rate increases, you've crossed the line.

MISTAKE 3: Staying on AdSense Too Long
If you're above 50K pageviews and still on AdSense, you're bleeding money daily.

MISTAKE 4: Ignoring Mobile Experience
Your mobile RPM should be monitored separately and optimized aggressively.

MISTAKE 5: Not Testing
Assumptions kill revenue. Test everything, trust data.

MISTAKE 6: Forgetting About Compliance
One policy violation can kill your account. Read terms, follow rules, stay current.

================================================================================

IMPLEMENTATION CHECKLIST

WEEK 1-2: Quick Wins
☐ Audit current RPM by page, traffic source, device
☐ Implement viewability improvements
☐ Block low-value ad categories
☐ Optimize ad density on top 10 pages

WEEK 3-4: Traffic Quality
☐ Analyze geographic mix
☐ Create plan for high-value traffic growth
☐ Implement session depth tactics
☐ Review device split, create desktop strategy

WEEK 5-6: Network Strategy
☐ Apply to better network (if eligible)
☐ Enable header bidding
☐ Configure ad refresh properly
☐ Set up A/B testing system

WEEK 7-8: Content Strategy
☐ Identify high-RPM topics in your niche
☐ Create 5+ commercial intent articles
☐ Optimize existing high-traffic pages
☐ Build internal linking structure

WEEK 9-12: Optimization & Scale
☐ Run systematic A/B tests
☐ Analyze winning combinations
☐ Scale content production
☐ Prepare for next network tier

================================================================================

KEY PERFORMANCE INDICATORS (Track These)

PRIMARY METRICS:
• RPM (overall and by segment)
• Revenue per session
• Pageviews per session
• Bounce rate

SECONDARY METRICS:
• Ad viewability percentage
• Page load speed
• Traffic by geography
• Traffic by device
• Session duration

REVIEW FREQUENCY:
• Daily: Revenue trends
• Weekly: RPM by source/page
• Monthly: Full performance audit
• Quarterly: Network and strategy review

================================================================================

FINAL REALITY CHECK

WHAT SUCCESS LOOKS LIKE:

Baseline (No Optimization):
50K pageviews × $8 RPM = $400/month

After 90-Day Implementation:
50K pageviews × $18 RPM = $900/month
Same traffic, 125% revenue increase

With Traffic Growth:
100K pageviews × $18 RPM = $1,800/month
350% revenue increase from baseline

The Compound Effect:
RPM improvements + traffic growth = exponential revenue scaling.

================================================================================

RESOURCES & TOOLS

Analytics:
• Google Analytics 4 (traffic analysis)
• Google Search Console (content performance)
• Network dashboards (revenue analytics)

Testing:
• Ezoic (all-in-one optimization)
• Google Optimize (free A/B testing)

Speed Optimization:
• GTmetrix (performance testing)
• PageSpeed Insights (Core Web Vitals)
• Cloudflare (CDN, free tier)

Ad Networks:
• Ezoic (10K+ pageviews)
• Mediavine (50K+ sessions)
• AdThrive (100K+ pageviews)

================================================================================

NEXT STEPS

IMMEDIATE ACTIONS (Today):
1. Screenshot your current RPM (baseline)
2. Run the calculator with your current numbers
3. Identify your top 3 highest-impact tactics from this guide
4. Block out implementation time on calendar

THIS WEEK:
1. Complete Section 2 quick wins
2. Audit traffic quality (Section 3)
3. Document current performance

THIS MONTH:
1. Implement chosen tactics systematically
2. Track results weekly
3. Adjust based on data

Remember: RPM optimization is not a one-time event—it's an ongoing process. Publishers who win long-term treat this as a core operational discipline, not a side project.

================================================================================

THE BOTTOM LINE:

Most publishers never optimize RPM systematically. They accept whatever their network gives them. You now have the blueprint to outperform them.

Execute methodically. Measure ruthlessly. Scale aggressively.

Your move.

================================================================================

© RPM Optimization Playbook
Downloaded from Ad Revenue Calculator`;

    const blob = new Blob([guideContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RPM-Optimization-Playbook.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Calculate Your Ad Revenue Potential
          </h1>
          <p className="text-xl text-slate-600">
            See how much your website traffic could earn with display ads—instantly.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Inputs */}
          <div className="space-y-8 mb-10">
            {/* Monthly Pageviews */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-slate-800">
                  Monthly Pageviews
                </label>
                <span className="text-2xl font-bold text-blue-600">
                  {formatNumber(pageviews)}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000000"
                step="10000"
                value={pageviews}
                onChange={(e) => setPageviews(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-500 mt-2">
                <span>1K</span>
                <span>10M</span>
              </div>
            </div>

            {/* RPM */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-slate-800">
                  Revenue Per Mille (RPM)
                </label>
                <span className="text-2xl font-bold text-green-600">
                  ${rpm}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={rpm}
                onChange={(e) => setRpm(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-500 mt-2">
                <span>$1</span>
                <span>$50</span>
              </div>
              <div className="flex gap-2 mt-3">
                {[5, 10, 15, 20, 30].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setRpm(preset)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      rpm === preset
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Growth Rate Toggle */}
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showGrowth}
                  onChange={(e) => setShowGrowth(e.target.checked)}
                  className="mr-3 h-5 w-5 text-blue-600 rounded"
                />
                <span className="text-lg font-semibold text-slate-800">
                  Factor in traffic growth
                </span>
              </label>
              
              {showGrowth && (
                <div className="mt-4 pl-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-base font-medium text-slate-700">
                      Monthly Growth Rate
                    </label>
                    <span className="text-xl font-bold text-purple-600">
                      {growthRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={growthRate}
                    onChange={(e) => setGrowthRate(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>0%</span>
                    <span>50%</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="border-t-2 border-slate-200 pt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Revenue */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="text-blue-600" size={24} />
                  <span className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
                    Monthly Revenue
                  </span>
                </div>
                <div className="text-4xl font-bold text-blue-900">
                  {formatCurrency(monthlyRevenue)}
                </div>
              </div>

              {/* Yearly Revenue */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-600" size={24} />
                  <span className="text-sm font-semibold text-green-900 uppercase tracking-wide">
                    {showGrowth ? 'With Flat Traffic' : 'Yearly Revenue'}
                  </span>
                </div>
                <div className="text-4xl font-bold text-green-900">
                  {formatCurrency(yearlyRevenue)}
                </div>
              </div>

              {/* Growth Projection */}
              {showGrowth && (
                <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-purple-600" size={24} />
                    <span className="text-sm font-semibold text-purple-900 uppercase tracking-wide">
                      12-Month Projection (with {growthRate}% growth)
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-purple-900 mb-2">
                    {formatCurrency(yearEndRevenue)}
                  </div>
                  <div className="text-sm text-purple-700">
                    That's {formatCurrency(yearEndRevenue - yearlyRevenue)} more than flat traffic
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Context Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Understanding Your Numbers
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong>RPM (Revenue Per Mille)</strong> is how much you earn per 1,000 pageviews. 
                  This varies wildly based on your niche, audience location, and ad network.
                </p>
                
                <p>
                  <strong>Typical RPM ranges:</strong> Finance/tech blogs ($20-$50), 
                  lifestyle/general content ($5-$15), entertainment/viral content ($3-$8). 
                  Premium networks like Mediavine average $15-$25.
                </p>
                
                <p>
                  <strong>What affects your revenue:</strong> Traffic quality beats traffic quantity. 
                  US/UK/Canada visitors pay 3-5x more than global traffic. Desktop users generate higher 
                  RPMs than mobile. Engaged readers who stay longer see more ads.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-amber-900 mb-3 text-lg">
            Important Disclaimer
          </h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            These are estimates only, not guarantees. Actual revenue depends on multiple factors 
            including niche, traffic sources, user engagement, ad placement, seasonality, and ad 
            network policies. Results can fluctuate month-to-month. Use this calculator to understand 
            potential, not predict exact earnings.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Maximize Your Ad Revenue?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get the complete guide to increasing your RPM and scaling your traffic
          </p>
          <button 
            onClick={handleDownload}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Download Free RPM Optimization Guide
          </button>
        </div>

        {/* Example Calculations */}
        <div className="mt-8 text-center text-sm text-slate-600">
          <p className="mb-2">Quick examples:</p>
          <p>50K pageviews × $15 RPM = $750/month | 100K × $20 RPM = $2,000/month | 500K × $25 RPM = $12,500/month</p>
        </div>
      </div>
    </div>
  );
}