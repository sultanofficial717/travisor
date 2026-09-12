# CitrusAd (Epsilon Retail Media) — Complete Technical, Architectural & Strategic Analysis

---

## 1. Executive Summary & Corporate Transformation
* **Founding & Roots**: Founded in 2017 in Brisbane, Australia by Brad Moran and Nick White as a lightweight, scalable retail media software-as-a-service (SaaS) platform designed for grocers and online retailers to monetize their digital shelf space.
* **Publicis Groupe Acquisition**: Acquired in July 2021 by global advertising conglomerate Publicis Groupe for an estimated AU$205M (~US$150M).
* **Merger with Epsilon**: Publicis Groupe merged CitrusAd with Epsilon (acquired by Publicis in 2019 for $4.4B), pairing CitrusAd’s high-speed on-site retail media ad server with Epsilon’s 300M+ deterministic identity graph (**CORE ID**) and programmatic off-site demand-side platform (DSP).
* **Next-Gen Platform Rebranding**: The platform is now officially transitioning and rebranding as **Epsilon Retail Media**. The legacy CitrusAd interface (`campaign.citrusad.com`) is deprecated and superseded by the unified next-gen interface at `help.citrusad.com/retail-media-interface`.

---

## 2. Infrastructure Reconnaissance & Web Crawl Findings

### A. Subdomains & Network Topology
A network scan and crawl revealed 12 active subdomains deployed across a hybrid multi-cloud infrastructure:

| Subdomain / Host | Resolved IP | Cloud Provider | Core Function |
| :--- | :--- | :--- | :--- |
| `citrusad.com` / `www` | `3.174.46.41` / `3.174.46.74` | AWS (ALB / CloudFront) | Corporate marketing front-end & inbound lead capture |
| `api.citrusad.com` | `34.111.190.154` | Google Cloud Platform (GCP) | Production REST ad-decisioning, catalog, & partner APIs |
| `admin.citrusad.com` | `136.110.191.226` | Google Cloud Platform (GCP) | Multi-tenant retailer administration & back-office console |
| `staging.citrusad.com` | `35.241.46.80` | Google Cloud Platform (GCP) | Sandbox & partner integration staging environment |
| `cdn.citrusad.com` | `35.244.187.79` | Google Cloud Platform (GCP / GCS)| High-performance creative asset and image delivery |
| `insights.citrusad.com` | `34.149.210.147` | Google Cloud Platform (GCP) | Retailer analytics, reporting, & data export services |
| `support.citrusad.com` | `34.117.213.204` | Google Cloud Platform (GCP) | Ticketing, customer service, & operations interface |
| `m.citrusad.com` | `34.149.87.45` | Google Cloud Platform (GCP) | Mobile API gateway & app client service layer |
| `media.citrusad.com` | `54.194.41.141` | AWS (`eu-west-1` Ireland) | Static creative and video media storage |
| `developers.citrusad.com` | `172.64.147.209` | Cloudflare Edge / GitBook | Developer hub and technical API specifications |
| `help.citrusad.com` | `104.18.40.47` | Cloudflare Edge / GitBook | Retail media knowledge base, UI guides, & release notes |
| `campaign.citrusad.com` | Cloud Hosted | Dedicated Portal | Legacy self-serve campaign manager (migrating to Epsilon) |

### B. Web Crawl Metrics & Corpus Breakdown
* **Total Discovered & Indexed Pages**: 180 pages.
* **HTTP Response Codes**: 177 `200 OK`, 1 `404 Not Found`, 2 Connection timeouts.
* **Corpus Segmentation**:
  * **Knowledge Base & Platform Guides**: 57 detailed articles on campaign workflows, bidding, wallets, and attribution.
  * **Developer Reference Hub**: 8 root categories covering over 200 individual REST endpoints.
  * **Case Studies, PR & Thought Leadership**: 62 articles highlighting partnership announcements and market case studies.
  * **Legal & Regulatory Compliance**: 29 localized agreements covering 8 languages (English, Spanish, French, German, Italian, Russian, Danish, Korean).
* **Machine-Readable LLM Indexing**: CitrusAd exposes full machine-readable documentation manifests:
  * `https://developers.citrusad.com/llms.txt` (33.7 KB)
  * `https://help.citrusad.com/retail-media-interface/llms.txt` (54.8 KB)
  * All documentation pages support Markdown retrieval by appending `.md` or querying via `?ask=` parameters.

### C. Technology Stack & Client-Facing Tools
* **Frontend Framework**: Next.js (React 18/19 server-side rendering).
* **Headless CMS**: Sanity CMS (`cdn.sanity.io`).
* **Styling**: Emotion CSS-in-JS combined with Tailwind utility styles.
* **Marketing & Form Tracking**: Epsilon Enterprise Tracking (`https://tracking.epsilon.com/e/f2`), Eloqua/Marketo form endpoints.
* **Interactive Guided Walkthroughs**: Storylane (`epsilon.storylane.io/hub/demo-hub`).
* **Tag Management**: Google Tag Manager (`GTM-WBB6WNWJ`).
* **Global Office Presence**:
  * South Brisbane, Australia (Global R&D / Origin)
  * Saint Petersburg, Florida, USA (North American HQ)
  * London, United Kingdom (EMEA HQ)
  * Barcelona, Spain (Southern Europe & LATAM HQ)

---

## 3. Product Offerings & Core Capabilities

### A. On-Site Retail Media Suite
1. **Sponsored Product Ads (SPA)**:
   * Native product placement within retailer search results, category pages, browse pages, cart, and homepage.
   * Real-time cost-per-click (CPC) second-price and first-price auctions.
   * Extremely low latency: **sub-50ms** ad-decisioning SLA.
   * Recommended retailer fallback timeout of **400–500ms** to prevent any impact on the shopper's page load experience.
2. **Banner Ads (Static & Responsive Banner X)**:
   * High-impact display formats positioned at top-of-funnel browse and department headers.
   * **Banner X**: Dynamically assembled responsive HTML5 creative that renders live pricing, stock availability, and multiple product cards.
   * **Shoppable Video**: Video ad integration directly on the retailer shelf powered by a partnership with **SponsorCart**.
3. **Brand Pages & Digital Storefronts**:
   * Custom self-serve digital storefronts hosted on the retailer’s domain.
   * Features custom hero banners, video showcases, curated product carousels, and 1-click add-to-cart buttons.

### B. Off-Site Programmatic Media (Epsilon Integration)
* **Identity Backbone (CORE ID)**: 300M+ privacy-safe, deterministic consumer identity profiles in the US and globally.
* **Cross-Channel Extension**: Retailers can activate their first-party shopper segments across open-web display, Connected TV (CTV), online video, and social channels.
* **Closed-Loop Omnichannel Attribution**: Direct matching of off-site ad impressions to online checkout transactions and physical brick-and-mortar in-store point-of-sale (POS) purchases.

### C. GroceryOne Coalition
* **US Grocery Network**: Aggregation network connecting 15+ independent and regional grocery chains (e.g., Wakefern / ShopRite, Hy-Vee, MyFoodLink).
* **Scale for CPG Brands**: Gives consumer packaged goods (CPG) brands the ability to reach millions of household grocery shoppers across the US through a single unified buy, competing directly with Walmart Connect and Amazon Ads.

### D. AIVA (Artificial Intelligence Virtual Assistant)
* **GenAI Natural Language Copilot**: Embedded conversational assistant allowing media planners and retailers to query campaign data in plain English.
* **Campaign Health Scoring**:
  * **Healthy (100 pts)**: Campaign is actively serving with spend and ROAS meeting or exceeding defined KPI benchmarks.
  * **Needs Attention (50 pts)**: Campaign is spending budget but generating subpar ROAS or conversion volume.
  * **Not Serving (0 pts)**: Zero impressions/clicks delivered due to out-of-stock items, exhausted daily budget, or empty wallet balance.
* **Root-Cause Analysis**: Automatically detects whether an ad stoppage is due to the campaign daily budget limit or a depleted shared wallet balance.

---

## 4. Platform Innovations & Release Milestones (2025–2026)

* **September 2026 — Floor Price Viewer**:
  * Provides retailer yield teams with a single read-only view in Settings to inspect configured minimum bids.
  * Features a **Manager view** to filter floor prices across keyword, category, and placement scopes, and an **Inspector view** to evaluate the exact resolving floor price for specific ad requests.
* **September 2026 — Inventory Yield Report Enhancements**:
  * Deeper analysis of unfilled inventory opportunities and monetizable auctions with platform filtering and CSV data exports.
* **August 2026 — Team Health Indicators**:
  * Predictive advertiser churn scoring engine categorizing advertiser accounts into **Healthy**, **Watch**, and **At-Risk** based on 30-day spend trends and pacing volatility.
* **July 2026 — Retailer Catalog & Product Tool**:
  * Self-service diagnostic utility allowing retailers to inspect catalog refresh dates, stock states, eligibility rules, and feed errors without filing support tickets.
* **June 2026 — Autobidding Engine**:
  * Algorithmic bidding strategies optimizing against specific KPIs:
    * **Max Conversion Value**: Maximizes total sales revenue within daily budget limits.
    * **Target ROAS**: Adjusts bids dynamically to maintain a predefined target return multiplier.
    * **Max Clicks / Max Impressions**: Drives maximum traffic or top-of-funnel reach.
  * **Average Daily Limit (ADL) Pacing**: Algorithms that evenly distribute spend across 24 hours to avoid premature morning budget exhaustion.
* **Q3 2026 — Click-Through & View-Through Attribution**:
  * Live reporting breakdown isolating direct click conversions from post-view influenced purchases across both online and physical store registers.

---

## 5. Technical Architecture & API Specifications

CitrusAd / Epsilon Retail Media operates two main REST API suites:

```
+-----------------------------------------------------------------------------------+
|                         EPSILON RETAIL MEDIA REST APIS                            |
+------------------------------------------+----------------------------------------+
| INTEGRATION APIS (Retailer / Supply-Side)| PARTNER APIS (Demand / Agencies / DSPs)|
+------------------------------------------+----------------------------------------+
| 1. Catalog & Product Feed Ingestion      | 1. Campaign CRUD (Single & Bulk)       |
| 2. Persistent HTTP Ad Decisioning (<50ms)| 2. Bulk Creation (up to 1,000 items)   |
| 3. Impression Tracking (/resource/first-i| 3. Wallets & Credit Management         |
| 4. Click Tracking (/resource/first-c)    | 4. Algorithmic Autobidding Control     |
| 5. Order & POS Data Synchronization      | 5. Segment & Audience Targeting Access |
| 6. HFSS Regulatory Placement Blocking    | 6. Suggested Search Terms Extraction   |
| 7. Marketplace Multi-Seller Support      | 7. Multi-Tenant Role-Based Access      |
+------------------------------------------+----------------------------------------+
```

### A. Integration APIs (Retailer Supply-Side)
1. **HTTP Persistence & Connection Keep-Alive**:
   * Requires persistent HTTP connections to avoid repetitive TLS handshake latency.
   * Ad requests use `POST /resource/generate-ads` with fallback timeout guidelines of 400–500ms.
2. **Impression & Click Telemetry**:
   * Impressions reported via `POST /resource/first-i`.
   * Clicks reported via `POST /resource/first-c`.
   * Interaction events for responsive banners and video tracked via dedicated event endpoints.
3. **Data Ingestion Channels**:
   * Supports RESTful JSON endpoints as well as automated batch file ingestion via SFTP, Amazon S3, and Google Cloud Storage (GCS).
4. **HFSS Compliance (UK / EU Regulations)**:
   * Built-in placement-level blocking for High in Fat, Sugar, or Salt (HFSS) products, automatically ensuring restricted categories are never displayed in promotional zones.
5. **Variant & Marketplace Architecture**:
   * Supports **Parent Products** to consolidate SKU variants (sizes, flavors, colors) under a single master catalog entity.
   * Supports third-party marketplace architectures with `sellerId` tagging, allowing multiple merchants to compete for the buy box or sponsored slot.

### B. Partner APIs (Demand-Side & Media Agencies)
1. **High-Throughput Bulk Operations**:
   * Dedicated endpoints capable of creating or updating up to **1,000 campaigns** and **1,000 wallets** in a single API call.
   * Asynchronous operation status tracking with `/bulkcampaignstatus` and `/bulkwalletstatus`.
2. **Multi-Tenant User & Team RBAC**:
   * Strict separation between retailer administrators, brand suppliers, and agency trading desks.
   * Invitation-token-based onboarding and granular permission controls.
3. **Wallet & Financial Management**:
   * Dedicated balance query and funding top-up endpoints (`/managefunds`, `/getwalletbalance`).
   * Support for shared multi-campaign wallets and custom credit ceilings.

---

## 6. Client Roster, Partners & Integrations

### A. Global Retailers Crawled & Verified
* **Tier-1 Supermarkets & Grocery**:
  * **Carrefour** (Global partnership & retail media joint venture with Publicis)
  * **Sainsbury’s / Nectar360** (UK)
  * **Tesco** (UK)
  * **Woolworths** (Australia)
  * **Coles** (Australia)
  * **Ocado** (UK online supermarket)
  * **REWE** (Germany)
  * **Hy-Vee** (US grocery chain)
  * **Wakefern Food Corp / ShopRite** (US supermarket cooperative)
  * **Aeon Next / Green Beans** (Japan online grocery)
  * **PromoFarma** (Southern Europe pharmacy & beauty)
* **Specialty Retail & Quick Commerce**:
  * **Petco** (Pet supplies)
  * **AutoZone** (Automotive parts)
  * **Gopuff** (Instant delivery / quick commerce)
  * **Delivery Hero** (Global food & grocery delivery)
  * **Veepee** (Flash sales & fashion)
  * **Argos** (UK general merchandise)
  * **PC Componentes** (Consumer electronics)

### B. Agency, DSP & Tooling Partners
* **E-Commerce Ad Management Platforms**: Flywheel Digital, Pacvue, Perpetua, Skai (formerly Kenshoo).
* **Enterprise Analytics & Marketplace Infrastructure**: Domo, Marketplacer, AdsPostX, Chiper B2B platform, SponsorCart.

---

## 7. Business Model & Monetization Architecture

* **Software-as-a-Service (SaaS) & Platform Licensing**: Retailers license the ad server and admin portal to control their on-site monetization.
* **Media Revenue Share**: Revenue sharing model based on gross ad spend processed across the network.
* **Prepaid & Postpaid Wallets**: Flexible financial management allowing advertisers to prepay via credit card/wire or operate on approved credit terms across shared wallets.
* **Agency Bundling via Publicis Groupe**: Publicis media agencies route global brand spend directly into CitrusAd/Epsilon-powered retailer networks, creating guaranteed demand for onboarding retailers.

---

## 8. Strategic Competitive Benchmarking

| Feature | CitrusAd / Epsilon Retail Media | Criteo Retail Media Platform | Kevel (Ad Serving APIs) | Amazon Ads / Walmart Connect |
| :--- | :--- | :--- | :--- | :--- |
| **Model** | Managed SaaS & Open APIs | Managed SaaS & Ad Network | Developer API Framework | Closed Walled Garden |
| **On-Site Formats** | SPA, Banner X, Video, Brand Pages | Sponsored Products & Banners | Custom-built by developer | Sponsored Products/Brands/Video |
| **Off-Site Reach** | Epsilon CORE ID (300M+ profiles) | Criteo Commerce Grid | 3P DSP integrations needed | Amazon DSP / Walmart DSP |
| **Omnichannel POS** | Closed-loop online + in-store POS | Primarily online e-commerce | Dependent on custom ETL | Yes (within ecosystem) |
| **Grocery Coalition** | Yes (GroceryOne US network) | Individual partnerships | No | Walled gardens |
| **AI Copilot** | Yes (AIVA GenAI Assistant) | Algorithmic optimization | None | Yes (Rufus / AI campaign tools) |
| **Target Clients** | Enterprise Grocers & Retailers | Mid-to-Enterprise Retailers | Marketplaces & Dev Teams | Native to their own platforms |

---

*Report compiled from automated crawl data, subdomain mapping, and documentation analysis.*
