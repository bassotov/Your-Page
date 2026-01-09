# Workout Timer Kit — Product Plan

> **One-time purchase. Works with any AI. Custom workouts forever.**

---

## Executive Summary

A personalized workout timer that lives in your AI chat. Users pay $10 once, get setup instructions tailored to their equipment and goals, and can generate unlimited custom workouts through ChatGPT, Claude, Gemini, or any AI assistant.

**What we built:**
- Universal timer hosted at `barbash.in/workout`
- Reads custom workout data from URL parameters
- Any AI can generate workout links
- Users own their setup forever

---

## The Product

### What Users Get

A customized `SKILL.md` file — instructions they paste into their AI that teach it to:
1. Understand their equipment, goals, and limitations
2. Design personalized workouts on demand
3. Generate ready-to-use timer links

### How It Works

```
User: "Give me a 20-min leg workout"

AI: *knows user's equipment from SKILL.md*
    *designs appropriate workout*
    *generates URL with workout data*

AI: "Here's your workout: [Start Timer](barbash.in/workout?w=...)"

User: *clicks link* → timer loads with their custom workout
```

---

## Value Proposition

### For Users

| Benefit | How |
|---------|-----|
| **Knows you** | SKILL.md contains their equipment, goals, limitations |
| **Lives in your AI** | Works in ChatGPT, Claude, Gemini — wherever they already chat |
| **Fully customizable** | "Make it harder" / "I hurt my knee" / "Only 10 mins today" |
| **No ads, no subscription** | One-time purchase, works forever |
| **No app to install** | Timer runs in browser, works on any device |

### vs Alternatives

| Alternative | Problem |
|-------------|---------|
| Fitness apps (Peloton, Nike, etc.) | $10-30/month subscriptions |
| Generic interval timers | No personalization, manual setup every time |
| YouTube workouts | Can't customize, have to follow their pace |
| Personal trainer | $50-150/session |

**Our positioning:** "Your AI is your personal trainer. $10 once, forever."

---

## User Journey

### 1. Landing Page

**Hero section:**
> Your AI-Powered Personal Trainer
> Custom workouts in one click. No subscription. No app.

**Key points:**
- Works with ChatGPT, Claude, Gemini, and more
- Tailored to YOUR equipment and goals
- One-time purchase — own it forever
- Timer runs in browser, any device

**Demo:** GIF showing the flow (ask AI → get link → timer runs)

**CTA:** "Get Started — $10"

---

### 2. Onboarding Poll

After clicking CTA, multi-step poll collects:

**Step 1: AI Platform**
> Which AI assistant do you use most?
- ChatGPT
- Claude
- Gemini
- Other / Multiple

*Purpose: Customize setup instructions*

**Step 2: Training Type**
> What type of training do you do most?
- Strength / Weightlifting
- HIIT / Cardio
- Yoga / Mobility
- Mixed / Variety

*Purpose: Pre-load relevant exercise libraries*

**Step 3: Equipment**
> What equipment do you usually have access to?
- Nothing (bodyweight only)
- Basic home gym (dumbbells, bands, mat)
- Full gym (barbells, machines, cables)
- Specific equipment (let me list)

*If "Specific" → text field for custom list*

*Purpose: Ensure AI only suggests exercises they can do*

**Step 4: Goals (optional)**
> What are your main fitness goals?
- Lose weight / Get leaner
- Build muscle / Get stronger
- Improve endurance / Cardio
- General fitness / Stay active

*Purpose: Bias workout design toward their goals*

**Step 5: Limitations (optional)**
> Anything your AI should know about?
- Injuries or pain areas
- Time constraints
- Space limitations
- Other

*Purpose: Safety and personalization*

---

### 3. Payment

**Single option:** $10 one-time

Payment via Gumroad or Lemon Squeezy:
- Instant delivery
- No account required
- Credit card or PayPal

---

### 4. Delivery

After payment, user receives:

```
workout-timer-kit/
├── YOUR-SETUP.md          # Personalized based on poll answers
├── QUICK-START.pdf        # Visual setup guide with screenshots
└── TROUBLESHOOTING.md     # Common issues and fixes
```

**YOUR-SETUP.md contains:**
- Their equipment list
- Their goals and preferences
- Exercise library matching their setup
- Instructions for their specific AI platform
- Timer URL (barbash.in/workout)

---

### 5. Setup (2 minutes)

**For ChatGPT users:**
1. Go to chatgpt.com
2. Click profile → My GPTs → Create
3. Paste YOUR-SETUP.md into Instructions
4. Save as "My Workout Timer"
5. Start chatting!

**For Claude users:**
1. Go to claude.ai
2. Click Projects → New Project
3. Paste YOUR-SETUP.md into Project Instructions
4. Start chatting!

**For Gemini users:**
1. Create a Gem
2. Paste YOUR-SETUP.md into system instructions
3. Start chatting!

**For any other AI:**
1. Start a new chat
2. Paste YOUR-SETUP.md as first message
3. Start requesting workouts!

---

### 6. Usage

User chats naturally:

```
"Quick 15-minute workout before my call"
"Upper body, I want to go heavy today"
"Something easy, I'm sore from yesterday"
"Full body but no jumping, neighbors below me"
```

AI generates personalized workout → outputs timer link → user clicks → done.

---

## SKILL.md Structure

### Base Template

```markdown
# Workout Timer Assistant

You are a personal workout coach. You create customized workouts and generate timer links.

## Timer URL
Base URL: https://barbash.in/workout

## User Profile
[INJECTED BASED ON POLL ANSWERS]

## How to Create Workouts
1. Understand what user wants (duration, focus, intensity)
2. Design workout using ONLY their available equipment
3. Consider their goals and any limitations
4. Generate workout JSON
5. Encode as base64 and create clickable link

## Workout JSON Schema
{
  "name": "Workout Name",
  "rounds": 3,
  "restEx": 20,
  "restRound": 90,
  "cooldown": true,
  "exercises": [
    {
      "name": "Exercise Name",
      "weight": "12kg",        // optional
      "reps": "x10",
      "duration": 45,
      "video": "https://...",  // optional
      "equipment": "dumbbells" // optional
    }
  ]
}

## Exercise Library
[INJECTED BASED ON EQUIPMENT + TRAINING TYPE]

## Response Format
1. Show workout plan in readable format
2. Mention estimated duration
3. Provide clickable timer link
4. Offer to adjust

## Important Rules
- ONLY use exercises possible with user's equipment
- Respect any injuries or limitations
- Default to user's preferred training style
- Always provide the timer link
```

### Customization Layers

**Equipment injection:**
```markdown
## User's Equipment
- Dumbbells: 2kg, 4kg, 8kg, 10kg, 12kg, 14kg, 16kg
- Pull-up bar
- Resistance bands (light, medium)
- Yoga mat

ONLY suggest exercises using this equipment.
```

**Goals injection:**
```markdown
## User's Goals
Primary: Build muscle and strength
Secondary: Improve general fitness

Bias toward:
- Compound movements
- Progressive overload (track weights, suggest increases)
- 3-4 rounds, moderate rest
- Rep ranges: 8-12 for hypertrophy
```

**Limitations injection:**
```markdown
## Limitations
- Lower back sensitivity: avoid heavy deadlifts, prefer Romanian DL with light weight
- Limited space: no exercises requiring more than 2m × 2m area
- No jumping: downstairs neighbors

Always respect these constraints.
```

**Training style injection:**
```markdown
## Preferred Training Style
- Full body workouts preferred over splits
- Include cooldown/stretching
- 20-30 minute sessions ideal
- Likes circuit-style (minimal rest between exercises)
```

---

## Technical Architecture

### Components

```
┌─────────────────┐
│  Landing Page   │
│  (explains +    │
│   collects $)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Onboarding     │
│  Poll           │
│  (5 questions)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  SKILL.md       │
│  Generator      │
│  (assembles     │
│   custom file)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Delivery       │
│  (Gumroad/      │
│   email)        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐         ┌─────────────────┐
│  User's AI      │────────▶│  Hosted Timer   │
│  (GPT/Claude/   │  link   │  barbash.in/    │
│   Gemini)       │         │  workout        │
└─────────────────┘         └─────────────────┘
```

### Timer (already built)

- Hosted at: `barbash.in/workout`
- Reads workout from URL: `?w=BASE64_JSON`
- Features:
  - Exercise timer with work/rest phases
  - Round tracking
  - Cooldown stretches
  - Pause/skip/reset
  - Audio cues
  - Mobile-friendly

### SKILL.md Generator (to build)

Options:
1. **Manual:** Pre-write 10-20 variants, match to poll answers
2. **Template + injection:** Base template + variable sections
3. **AI-generated:** Use Claude API to generate on the fly

Recommendation: Start with #2 (template + injection). Simple, predictable, no API costs.

### Delivery (to set up)

- Gumroad or Lemon Squeezy
- Instant digital delivery
- Could use webhook to trigger SKILL.md generation
- Or: pre-generate all variants, deliver matching file

---

## Pricing Strategy

### Single Tier: $10

**Why $10:**
- Low enough for impulse purchase
- High enough to filter tire-kickers
- Comparable to 1 month of a fitness app
- "Pay once, own forever" is compelling

**What's included:**
- Personalized SKILL.md
- Setup guide with screenshots
- Access to hosted timer (forever)
- Email support for setup issues

### Future Options

| Tier | Price | Includes |
|------|-------|----------|
| Starter | $10 | SKILL.md + setup guide |
| Complete | $19 | Above + video walkthrough + example workouts |
| Pro | $29 | Above + 15-min setup call |

Start with single tier. Add options if demand supports it.

---

## Go-To-Market

### Launch Channels

**Primary:**
- Twitter/X thread explaining the concept
- Reddit: r/fitness, r/homegym, r/ChatGPT, r/ClaudeAI
- Product Hunt launch

**Secondary:**
- YouTube short demo (1-2 min)
- Fitness forums and communities
- AI tool directories

### Launch Content

**Twitter thread outline:**
1. Problem: Fitness apps want $20/month for generic workouts
2. Insight: You already pay for an AI that knows you
3. Solution: I made a timer your AI can control
4. Demo: GIF showing the flow
5. How it works: AI generates workout → encodes in URL → timer plays it
6. What you get: Custom instructions for YOUR equipment
7. CTA: $10, link in bio

**Product Hunt tagline:**
> "Your AI is your personal trainer. $10 once, custom workouts forever."

---

## Success Metrics

### Week 1
- 10+ sales = concept validated
- Collect feedback on setup experience

### Month 1
- 50+ sales
- <10% refund rate
- 3+ organic testimonials
- Identify common setup issues → improve docs

### Month 3
- $500+ total revenue
- Organic word-of-mouth growth
- Consider adding features based on feedback

---

## Development Roadmap

### Phase 1: MVP (Now)
- [x] Timer hosted and working
- [x] URL-based workout loading validated
- [x] ChatGPT integration tested
- [ ] Write base SKILL.md template
- [ ] Create 3-4 equipment variants
- [ ] Write setup guides (GPT, Claude, Gemini)
- [ ] Set up Gumroad product page
- [ ] Create simple landing page

### Phase 2: Launch
- [ ] Build poll flow on landing page
- [ ] Connect poll → SKILL.md delivery
- [ ] Create launch content (thread, demo GIF)
- [ ] Launch on Twitter + Reddit
- [ ] Product Hunt launch

### Phase 3: Iterate
- [ ] Collect user feedback
- [ ] Improve SKILL.md based on common issues
- [ ] Add more equipment/goal variants
- [ ] Consider video walkthrough
- [ ] Explore additional tiers

### Phase 4: Expand (Future)
- [ ] Progress tracking in timer (localStorage or URL-based history)
- [ ] PWA version for offline use
- [ ] Workout sharing (send timer links to friends)
- [ ] Template marketplace (user-contributed workouts)
- [ ] White-label for personal trainers

---

## Open Questions

- [ ] Domain: Keep on barbash.in/workout or get dedicated domain?
- [ ] Delivery: Gumroad vs Lemon Squeezy vs custom?
- [ ] Poll: Build custom or use Typeform/Tally?
- [ ] Support: Email only or Discord community?
- [ ] Refund policy: No questions asked, or case-by-case?

---

## Appendix: File Checklist

### To Create

**SKILL.md variants:**
- [ ] Base template
- [ ] Bodyweight only
- [ ] Home dumbbells
- [ ] Full gym
- [ ] Strength-focused
- [ ] HIIT/Cardio-focused

**Setup guides:**
- [ ] ChatGPT setup (PDF with screenshots)
- [ ] Claude setup (PDF with screenshots)
- [ ] Gemini setup (PDF with screenshots)
- [ ] Generic "any AI" setup

**Marketing:**
- [ ] Landing page copy
- [ ] Demo GIF/video
- [ ] Twitter thread draft
- [ ] Product Hunt listing

---

*Last updated: January 2026*
*Status: Validated, ready for MVP build*