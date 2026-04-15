# WordPress Migration Plan for Indian Community Toulouse Website

## Executive Summary
This document outlines a complete migration strategy from your current static HTML website to WordPress, enabling non-technical team members to manage content easily.

---

## Phase 1: Planning & Preparation (Week 1)

### 1.1 Current Website Audit
**Website Components to Migrate:**
- ✅ Main pages: Home, About, Projects, Events, Gallery, Contact, Blogs
- ✅ LMDP Event Page (complex, multi-language)
- ✅ 7 Blog categories: Passport & Visa, Students, Driving License, Administration, Services, Tourism/Travel, Accommodation
- ✅ Gallery with images
- ✅ Contact forms
- ✅ Event registration (HelloAsso integration)
- ✅ Donation links (HelloAsso)
- ✅ Language switching (English/French)

### 1.2 Current Design Elements
- **Color Scheme**: Primary pink (#F15AA8), secondary (#E94B8F)
- **Framework**: Bootstrap 5
- **Libraries**: jQuery, Font Awesome, AOS (Animate On Scroll)
- **Languages**: English & French (bilingual)
- **Mobile Responsive**: Yes

### 1.3 Hosting Requirements
**Recommended Providers:**
- **Bluehost** ($2.95-13.95/month) - Official WordPress partner
- **SiteGround** ($2.99-7.99/month) - Excellent support, performance
- **Kinsta** ($35+/month) - Premium, but overkill for non-profit
- **GoDaddy** ($3.99-8.99/month) - Simple, good support

**Recommendation:** SiteGround (best balance of cost, performance, support)

---

## Phase 2: WordPress Setup (Week 1)

### 2.1 Steps to Set Up WordPress

1. **Purchase Hosting & Domain**
   - Domain: indiancommunitytoulouse.org (if not already registered)
   - Annual cost: ~€10-15
   - Hosting: ~€50-100/year

2. **Install WordPress**
   - Most hosting providers offer 1-click WordPress installation
   - SiteGround provides free SSL certificate (HTTPS)
   - Backup tools included

3. **Essential Plugins to Install**
   ```
   ✅ Polylang (or WPML) - Multi-language support
   ✅ Elementor Pro - Visual page builder (non-technical editing)
   ✅ Yoast SEO - Search engine optimization
   ✅ WP Forms - Advanced contact forms
   ✅ Wordfence Security - Website security
   ✅ UpdraftPlus - Automated backups
   ✅ Akismet - Spam protection
   ✅ WP Super Cache - Performance optimization
   ✅ Events Calendar Pro - Event management
   ✅ WooCommerce (optional) - If selling items
   ```

4. **Theme Selection**
   - **Recommended:** Neve (free) or Oceanwp (free)
   - Both: Lightweight, SEO-friendly, responsive, customizable
   - Cost: Free (or $50-100 if you prefer premium theme)

---

## Phase 3: Content Migration (Week 2)

### 3.1 Content Structure in WordPress

**Post Types:**
- **Pages**: Home, About, Contact, Gallery
- **Posts**: Blog articles (for Blogs section)
- **Custom Post Type: Events**: For managing events like LMDP
- **Categories**: 
  - Blog Categories (Passport, Students, Driving License, etc.)
  - Event Types

**Taxonomy (Categories & Tags):**
```
Blog Categories:
├── Passport & Visa
├── Students
├── Driving License
├── French Administration
├── Services
├── Tourism & Travel
└── Accommodation

Event Categories:
├── Festivals
├── Workshops
└── Cultural Events
```

### 3.2 Migration Timeline

| Content | Time | Method |
|---------|------|--------|
| Home Page | 2 hours | Manual rebuild in Elementor |
| About Page | 1 hour | Copy-paste + format in Elementor |
| LMDP Page | 4 hours | Complex layout, needs careful setup |
| Blog Posts | 3 hours | Bulk import + format |
| Gallery | 2 hours | Upload images, organize |
| Contact Form | 1 hour | Configure WP Forms |
| Donation/Registration Links | 30 min | Add HelloAsso buttons |
| **Total** | **~13.5 hours** | **2-3 days** |

### 3.3 How to Migrate Content

**Option A: Manual (Recommended for quality control)**
1. Copy text from old HTML pages
2. Create pages/posts in WordPress using Elementor
3. Add images from `/img` folder
4. Format with matching colors & styles

**Option B: Import HTML (Faster but may need cleanup)**
1. Use plugin: "All-in-One WP Migration"
2. Requires export from current hosting
3. May break links and formatting

---

## Phase 4: Multi-Language Setup (Week 2)

### 4.1 Polylang Configuration (Recommended)

**Setup:**
1. Install & activate Polylang plugin
2. Add languages: English (default), French
3. Translate pages:
   - Home → Accueil
   - About → À Propos
   - Contact → Contactez-nous
   - Etc.

**How Non-Developers Use It:**
```
Dashboard → Polylang → Languages → Add Language (French)
Page Editor → Select Language (toggle English/French)
Frontend → Language switcher at top of site
```

### 4.2 URL Structure
```
English: indiancommunitytoulouse.org/
French:  indiancommunitytoulouse.org/fr/

English: indiancommunitytoulouse.org/about/
French:  indiancommunitytoulouse.org/fr/a-propos/

English: indiancommunitytoulouse.org/lmdp/
French:  indiancommunitytoulouse.org/fr/lmdp/
```

---

## Phase 5: Design & Customization (Week 2-3)

### 5.1 Elementor Setup (Visual Builder)

**Non-Technical Workflow:**
1. Go to Page Editor
2. Click "Edit with Elementor"
3. Drag & drop elements (text, images, buttons, etc.)
4. Change colors to match your brand (#F15AA8)
5. Save & publish

**Pre-built Elements:**
- Header with logo
- Hero section with image
- Text sections
- Image galleries
- Call-to-action buttons
- Contact forms
- Testimonials
- Team members
- Events list

### 5.2 Recreating Your Design
```
Homepage:
├── Header (Logo + Navigation + Language Switcher)
├── Hero Banner (LMDP image)
├── About Section
├── Services/Programs Section
├── Events Section
├── Gallery Section
├── News/Blog Section
├── Contact Section
└── Footer (Social Links, Links)

LMDP Page:
├── Banner Image
├── Program Overview
├── Workshop Cards (Street Food, Cooking, Cultural, Art, Fun)
├── Volunteer Section
├── Contact Form
├── Sponsors/Collaborations
└── Practical Info
```

### 5.3 Color & Branding
- Primary Color: #F15AA8 (Pink)
- Secondary: #E94B8F
- Accent: #F15A60
- Text: #333333
- Background: #FFFFFF / #F0F8FF

These will be set in: **Dashboard → Customize → Colors**

---

## Phase 6: Event Management (Week 3)

### 6.1 Events Calendar Pro Setup

**Features:**
- Create events with dates, times, locations
- Display calendar view
- Register attendees
- Integration with HelloAsso for ticketing

**For LMDP Event:**
```
Event Details:
├── Title: La Mela Des Plats 2026
├── Date: June 7, 2026
├── Time: 15:00 - 19:00
├── Location: Salle des fêtes de Lafourguette
├── Description: Full event details
├── Image: Event banner
├── Registration Link: HelloAsso
└── Categories: Festival, Cultural, Food
```

### 6.2 Managing Workshops
- Create sub-events for each workshop
- Set dates and capacity
- Link to registration pages

---

## Phase 7: User Access & Training (Week 3)

### 7.1 User Roles Setup

**Create These User Accounts:**

| Role | Permissions | Task |
|------|-----------|------|
| **Administrator** | Full access | Tech support person |
| **Editor** | Create/Edit/Delete all content | Content manager |
| **Author** | Create/Edit own blog posts | Blog writers |
| **Contributor** | Write blog posts (Admin approval needed) | Guest bloggers |

### 7.2 How to Add Users
```
Dashboard → Users → Add New
Fill in:
- Username: e.g., "sarah_editor"
- Email: e.g., sarah@ict.org
- Role: Select "Editor"
- Send password reset link
```

### 7.3 Training Guide for Non-Developers

**Simple Tasks (5-minute training):**
1. ✅ Edit existing page
2. ✅ Change text/images
3. ✅ Add blog post
4. ✅ Update event details
5. ✅ Switch language

**Intermediate Tasks (30-minute training):**
1. 📝 Create new page using Elementor (drag & drop)
2. 📝 Add gallery
3. 📝 Style buttons and sections
4. 📝 Add contact forms

**Advanced Tasks (1-hour training):**
1. 🔧 Configure settings
2. 🔧 Manage plugins
3. 🔧 Backups & security
4. 🔧 SEO optimization

---

## Phase 8: Integration with External Services (Week 3)

### 8.1 HelloAsso Integration
**What:** Donation & event registration platform you already use

**How to add to WordPress:**
1. Get HelloAsso embed code
2. Use plugin: "HelloAsso for WordPress"
3. Add buttons/forms to pages via Elementor

**No need to switch platforms** - Keep using HelloAsso!

### 8.2 Google Analytics Integration
**Install:**
1. Dashboard → Yoast SEO → Integrations
2. Add Google Analytics 4 tracking ID
3. Monitor website traffic & user behavior

### 8.3 Contact Form Integration
**Current:** FormSubmit.co
**Better WordPress option:** WP Forms
- Built-in spam protection
- Email notifications to admins
- Form analytics
- No external service needed

---

## Phase 9: SEO & Performance (Week 4)

### 9.1 SEO Setup with Yoast
```
For each page/post:
1. Add focus keyword (e.g., "Indian community Toulouse")
2. Write meta description (160 characters)
3. Add internal links
4. Optimize readability
5. Add images with alt text
```

**Best for:**
- Blog posts rank on Google
- More visitors from search
- Better visibility for your events

### 9.2 Performance Optimization
**Installed plugins handle:**
- ✅ Image compression
- ✅ Caching
- ✅ CSS/JS minification
- ✅ Database optimization

**Result:** Fast loading pages (important for mobile users)

---

## Phase 10: Security & Backups (Week 4)

### 10.1 Security Measures
```
Enabled automatically:
✅ SSL Certificate (HTTPS)
✅ Firewall (Wordfence)
✅ Spam filtering (Akismet)
✅ Admin login protection
✅ Two-factor authentication option
```

### 10.2 Automatic Backups
```
UpdraftPlus backs up:
✅ All pages/posts
✅ Database
✅ Settings
✅ Plugins/themes

Schedule: Daily backups
Retention: 30 days of backups stored
Restore: One-click restore if something breaks
```

---

## Migration Timeline Summary

| Phase | Duration | Cost |
|-------|----------|------|
| **Phase 1:** Planning | 1 day | Free |
| **Phase 2:** Setup | 1 day | €0-50* |
| **Phase 3:** Content Migration | 2-3 days | Free |
| **Phase 4:** Multi-Language | 1 day | Free |
| **Phase 5:** Design | 2-3 days | Free |
| **Phase 6:** Events | 1 day | Free |
| **Phase 7:** Training | 1-2 days | Free |
| **Phase 8:** Integrations | 1 day | Free |
| **Phase 9:** SEO | 1 day | Free |
| **Phase 10:** Security | 1 day | Free |
| **TOTAL** | **2-3 weeks** | **€50-200/year** |

*Includes optional premium theme (free alternatives available)

---

## Cost Breakdown (Annual)

| Item | Cost | Notes |
|------|------|-------|
| Domain (.org) | €10-15 | Register once |
| Hosting (SiteGround) | €60-100/year | Includes SSL, email, backups |
| Theme (optional premium) | €50-100 (one-time) | Free alternatives available |
| Plugins (Elementor Pro) | €99/year (optional) | Free version sufficient |
| **Total (Budget)** | **€130-180/year** | **Much cheaper than developer** |
| **Total (Premium)** | **€220-315/year** | **Full professional setup** |

---

## Post-Migration Support

### Things You NO LONGER Need to Do
- ❌ Manually edit HTML files
- ❌ Deploy/upload files to server
- ❌ Manage server infrastructure
- ❌ Worry about security patches
- ❌ Deal with broken links manually

### Things Your Team CAN DO Now
- ✅ Update content directly (no coding)
- ✅ Create blog posts instantly
- ✅ Manage events & registrations
- ✅ Upload gallery images
- ✅ Change colors/layout (Elementor)
- ✅ Add new team members
- ✅ Switch languages with one click
- ✅ Create new pages from templates

### Ongoing Maintenance
- **Weekly:** Review & respond to contact forms
- **Monthly:** Check analytics, update events
- **Quarterly:** Review & optimize blog content
- **Yearly:** Renew domain & hosting

---

## Recommended Next Steps

### Option 1: DIY Migration (Save Money)
1. Buy hosting (SiteGround)
2. Install WordPress + plugins yourself
3. Use this guide for setup
4. Migrate content manually
5. **Cost:** €130-180/year + your time

### Option 2: Hybrid (Some Professional Help)
1. Hire freelancer for initial setup (€200-400)
2. They handle Phases 1-5
3. You manage content going forward
4. **Cost:** €330-580 (one-time) + €130-180/year

### Option 3: Full Professional Service
1. Hire WordPress agency
2. Complete migration & training
3. 3-month support included
4. **Cost:** €1,500-3,000 (one-time) + €130-180/year

---

## FAQ

**Q: Will I lose my current website?**
A: No, we'll keep it as backup. You can keep both running during migration.

**Q: What if something breaks?**
A: Daily backups mean 1-click restore to previous version.

**Q: Can my volunteers edit the site?**
A: Yes! Create separate "Editor" accounts for each team member.

**Q: Will my website rank on Google?**
A: Yes, better! WordPress with Yoast SEO improves search visibility.

**Q: What about mobile?**
A: WordPress themes are mobile-first. Your site will look great on all devices.

**Q: Can I go back to HTML if I want?**
A: Yes, export all content anytime. But you won't want to!

**Q: How long does migration take?**
A: 2-3 weeks if done yourself, 1 week with professional help.

**Q: Is WordPress secure?**
A: Yes! Daily backups + automatic security plugins + SSL certificate = Safe.

---

## Action Items

- [ ] Choose hosting provider (SiteGround recommended)
- [ ] Purchase domain & hosting
- [ ] Install WordPress
- [ ] Install recommended plugins
- [ ] Choose theme (Neve or Oceanwp)
- [ ] Start content migration
- [ ] Set up multi-language with Polylang
- [ ] Configure Elementor
- [ ] Create user accounts for team
- [ ] Train team members
- [ ] Launch!

---

## Support Resources

**WordPress Documentation:** wordpress.org/support
**Elementor Tutorials:** elementor.com/help
**Polylang Support:** polylang.pro/doc
**Yoast SEO Guide:** yoast.com/wordpress-seo

---

**Document Created:** April 15, 2026
**Last Updated:** April 15, 2026
**Status:** Ready for Implementation
