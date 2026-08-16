---
title: PCB design — small dense 2-layer LED puck (KiCad 9 / PCBWay)
type: source
status: notes
created: 2026-08-14
updated: 2026-08-14
tags: [source, pcb, kicad, led, thermal, pcbway, hardware]
related:
  - "[[Skills/Custom/hardware-forge]]"
---

# Source: PCB design for small 2-layer LED pucks

**Capture:** public KiCad / PCBWay / LED thermal notes, 2026-08-14.

This note is the **portable method**: what actually fails on a small round LED board and how to route/fab it. Numbers below are from manufacturer/KiCad/PCBWay docs or marked *est.* Instance boards stay in the product repo.

---

## 1. Small dense 2-layer round boards

### Stackup: FR4 vs MCPCB

| Choice | When | Why |
|--------|------|-----|
| **2-layer FR4 + TIM → Al can** | Total dissipation a few watts, housing is a real heat sink, LEDs are mid-power (2835 class) | Cheap, 2-side copper, easy vias, SMT on one side. Joe’s 5.5 W Al-can path is this. |
| **MCPCB / IMS (Al core)** | High-power COB / 1–3 W LEDs with little can area, or no metal housing | Metal core is the heat path. Usually **1 copper layer** (or expensive 2L IMS). Harder to route a MCU + buck + 12 LEDs. PCBWay documents aluminum PCBs as a separate process ([Al PCB intro](https://www.pcbway.com/pcb_prototype/General_introduction_of_Aluminum_PCB.html)). |
| 4-layer FR4 | Digital density, not thermal | Overkill for a puck unless you need a buried GND and can’t pour the back. |

Cree’s XLamp PCB thermal note: heat must leave the LED thermal pad into copper, then into the sink; FR4 itself is a poor conductor — you design the **copper + vias + TIM**, not the laminate ([Cree XLamp PCB Thermal](https://downloads.cree-led.com/files/da/x/XLamp-PCB-Thermal.pdf)). ams-OSRAM’s LED-PCB tech note same thesis: choose substrate for thermal resistance of the *system*, not the board in free air ([ams-OSRAM PCB technologies for LED](https://look.ams-osram.com/m/489c9d95ab91f02f/original/PCB-technologies-for-LED-applications.pdf)).

**Do:** 2L FR4 1.6 mm / 1 oz if the can is the sink and P ≲ ~6 W *est.*  
**Don’t:** jump to IMS just because it’s an LED board — IMS fights front-only MCU/FET routing.

### Outline / panel

- Circular + flats (Joe: Ø78 + 4× 1.5 mm cardinal flats) is easier to fixture than a perfect circle.
- **V-score is for straight lines.** Round boards panelize with **tab-route + mousebites** (or a routed array). PCBWay panel notes: V-cut is linear; irregular outlines use routing ([PCB panel creation](https://www.pcbway.com/pcb_prototype/PCB_Panel_Creation.html)).
- Keep copper ≥ **0.3–0.5 mm** from Edge.Cuts (Joe fab sheet: **0.50 mm**). Outline on a dedicated Edge.Cuts layer, not silk.

### Keepouts

- Optical window / LED ring: no tall parts in the beam (MCU, inductors, fuse).
- Antenna keepout (ESP32-C3-MINI-1): no copper pour / no TIM vias under the 12×10 *est.* keepout.
- Center hole: mechanical + electrical keepout (see §7).

---

## 2. Front-only parts, back pour / TIM only

**Recipe:** all footprints F.Cu. B.Cu = solid GND (or thermal) pour that is the TIM face. **0 B.Cu parts.** Joe already: “B.Cu signals 0.”

| Item | Practice |
|------|----------|
| **TIM copper** | Continuous pour, no slots, no silk on the contact face. Diameter set by can (Joe: Ø55). |
| **Solder mask on TIM face** | **Open the TIM pad** (or a large mask opening) so TIM sees copper, not ink. Mask is a thermal blanket. Leave a mask dam at the rim so TIM doesn’t smear to the edge / hole. |
| **Finish** | **ENIG** preferred for flat TIM contact and fine module pads (C3). HASL-LF is cheaper but lumpy — worse TIM wet-out. Joe fab sheet: ENIG pref, HASL-LF OK. |
| **Can isolation** | If the Al can is **floating / painted / anodized**, TIM can sit on GND pour. If the can can **short to chassis 12 V or earth**, either (a) isolate the TIM copper (thermal pour not net-tied, or tied through a controlled point) or (b) treat the can as chassis and **do not** let +12 V copper kiss the hole/screws. 12 V creepage is small (IPC-2221B Table 6-1 external uncoated **0–15 V is 0.1 mm** *est.* from common reprints) — the real risk is a **wire nick or screw** at the hole, not 12 V across a 0.2 mm gap. |
| **Screws / flats** | No +12 V pour to the rim flats. GND pour OK if can is meant to be GND; otherwise keepout rings. |

**Do:** one TIM island, mask-open, ENIG, vias only inside the island.  
**Don’t:** HASL peaks + full mask over the TIM pad; don’t put signal traces on B.Cu “just this once.”

---

## 3. KiCad 9: arcs / free-angle / concentric vs orthogonal

Official PCB editor ([KiCad 9 pcbnew](https://docs.kicad.org/9.0/en/pcbnew/pcbnew.html)):

- **Line mode:** free angle vs 45° vs 90°. Toggle **Shift+Space**; palette on the line-mode button.
- **Track corner mode** while routing: sharp vs **rounded (arc) corners** — **Ctrl+/** (forum-confirmed, also in 9.0 track-corner docs).
- **Interactive router → Highlight collisions**; uncheck **Free angle mode** there if you want H/V/45 constrained ([kicad.info](https://forum.kicad.info/t/how-to-get-single-traces-to-do-horizontal-vertical-and-45/63460)).
- **Draw arc** tool: center, then start/end. Right-click the button to switch “keep center” vs “keep radius.” Good for **concentric power rings** and Edge.Cuts.
- **Fillet tracks** (select tracks → fillet radius): works, but is **destructive** — later edits often mean redraw ([kicad.info curved traces](https://forum.kicad.info/t/curved-traces-shower-singer-to-professional/46389)). Prefer routing with rounded corners from the start.
- Arc/circle approximation error default **0.005 mm** — fine for fab.

**Why orthogonal dies on a ring:** 45° jogs between LEDs on a Ø35 mm pitch circle waste the only alley you have, mismatch series-string lengths, and create pour slivers. Polar layout: **radial spokes + concentric rings**.

**Do this in KiCad 9**

1. Grid: 0.1 mm or 0.25 mm; polar placement for LEDs (Joe: 15°+k·30°).
2. Shift+Space → **free angle** for spoke exits from LED pads.
3. Ctrl+/ → **rounded corners** on the ring belts.
4. Draw **graphic arcs on F.Cu with a net** *or* route with free-angle + fillet for +12V / SINK belts.
5. Zones: B.Cu GND, thermal spokes, keep-out on antenna and hole.

**Don’t:** autoroute; don’t flip parts to B.Cu; don’t fight the ring with Manhattan.

---

## 4. Clearance, shorts, ratsnest, DRC

### PCBWay 2-layer capability vs what you should use

PCBWay lists prototype min track/spacing down around **4 mil / 0.1 mm** class depending on copper weight ([capabilities](https://www.pcbway.com/capabilities.html), [min track vs oz](https://www.pcbway.com/helpcenter/ordering_parameter_instruction/What_is_the_Min_Track_Spacing_for_1oz__2oz__3oz__Copper_weight_.html)). **Do not design to the floor.**

**Starting DRC for a 12 V Ø78 2L LED puck (Joe-aligned, conservative):**

| Rule | Start at | Notes |
|------|----------|-------|
| Clearance | **0.20 mm** (8 mil) | Above IPC 12 V; matches Joe fab sheet |
| Track width (signal) | **0.30 mm** | GPIO / DRV |
| Track width (LED string / 12 V) | **0.40–0.80 mm** or a **pour belt** | Current — see §7 |
| Via | **0.80 / 0.40 mm** (dia/drill) | No microvias |
| Copper to edge | **0.50 mm** | Outline + flats |
| Hole to hole | ≥ **0.5 mm** *est.* | Center hole vs vias |
| Silk over copper | warn | 57 warnings on Joe’s board are OK if cosmetic |
| Courtyard | error | Packed south rim already ate courtyard |

Run **Inspect → Design Rules Checker** before plot. PCBWay: “strongly recommended to perform a DRC before exporting Gerbers” ([KiCad 9 export](https://www.pcbway.com/helpcenter/generate_gerber/How_to_Export_Gerber__BOM__and_Pick_and_Place_Files_in_KiCad_9_0.html)).

### Ratsnest on a ring

A dense LED ring looks like a hairball. Filter by net: route **+12V / +12V_SW** belts first, then **SINK** returns, then **series MID** hops (pad-to-next-pad, not across the disk), then **DRV_*** as the leftover alleys. Unconnected leftovers that “need B.Cu” are a topology problem, not a DRC problem (Joe’s 10 open nets).

### How these boards actually short

| Mechanism | What it looks like | Fix |
|-----------|--------------------|-----|
| **Pour sliver** | Hairline copper between pad and zone | Min-width on zones; prune; no acute zone necks |
| **Island** | DRC “GND zone island” | Stitch with a via or delete the island |
| **Via-in-pad, unfilled** | Solder wicks down the barrel; dry joint / tombstone | **No VIP** on cheap PCBWay unless they **fill+plate**. Put thermal vias **beside** the pad or use a dedicated thermal pad with vias in a mask-defined pad that isn’t the SMT fillet |
| **Mask sliver** | < ~0.1 mm mask between pads | Enlarge mask opening or pad gap |
| **Annular ring breakout** | Drill walks off the via pad | 0.80/0.40 via is safe; don’t drop to 0.5/0.3 unless you must |
| **Center-hole scrape** | Wire insulation abrades on FR4 | Grommet, chamfer, keepout, strain relief (§7) |

---

## 5. Thermal vias + Al-can TIM

**Path:** LED thermal pad → F.Cu copper → **plated vias** → B.Cu TIM pour → **TIM** → Al can.

Cree: put vias **in/near the thermal pad**, short path, many small plated holes beat one huge hole ([Cree XLamp PCB Thermal](https://downloads.cree-led.com/files/da/x/XLamp-PCB-Thermal.pdf)). Nichia through-hole-substrate note: via count and copper area dominate FR4 thermal resistance ([Nichia thermal design](https://led-ld.nichia.co.jp/api/data/spec/tech/SP-QR-C2-210611-1-E_Thermal%20Design%20of%20a%20Through%20Hole%20Substrate%20for%20the%20Heat%20Dissipation%20of%20the%20LEDs.pdf)).

**Practical via field (1 oz, cheap fab) — *est. starting point, not a calc*:**

- Drill **0.3–0.4 mm**, pad **0.7–0.8 mm**, pitch **1.0–1.2 mm**
- Array under/around each LED thermal pad **and** a fill inside TIM Ø55 (Joe: inner GND via field, pruned under front pads / antenna)
- **Plate-through, tented on F.Cu** (stop solder wicking), **open or tented on B.Cu**. If B.Cu is the TIM face, **open** vias on the back are OK (TIM fills dimples) or tent if you want a flat pad
- **Do not** use unfilled via-in-pad on the 2835 SMT pads

**TIM to Al can**

- **Silicone gap pad** (Bergquist Gap Pad class): thickness set by can gap, no pump-out. Best for a puck you might service.
- **Grease / paste:** lower Rθ if the gap is thin and clamped; can dry/pump in an RV thermal cycle.
- **Mask-open copper + ENIG** so the pad actually touches TIM.
- Air gaps kill you: warpage, HASL bumps, missing clamp. Flats on the outline help the board sit.

**What people get wrong**

- Three vias “somewhere nearby”
- Vias outside the TIM diameter
- TIM over soldermask
- IMS quote when the can already sinks 5 W

---

## 6. PCBWay-class Gerbers / BOM / CPL

Official KiCad 9 handoff ([PCBWay: export Gerber/BOM/PnP in KiCad 9.0](https://www.pcbway.com/helpcenter/generate_gerber/How_to_Export_Gerber__BOM__and_Pick_and_Place_Files_in_KiCad_9_0.html)):

1. **DRC first.** Refill zones.
2. **File → Plot** (Gerbers). Layers typically:
   - F.Cu, B.Cu
   - F.Mask, B.Mask
   - F.Paste (SMT; B.Paste empty if front-only)
   - F.Silkscreen, B.Silkscreen (B.Silk often empty / don’t mirror text)
   - Edge.Cuts
3. **Generate Drill Files…** from that dialog (Excellon). Match PCBWay’s pictured settings (usually **mm**, **merge PTH/NPTH** or separate per their form — follow the article screenshots).
4. **BOM:** Schematic → Tools → Generate BOM → CSV.
5. **CPL / PnP:** PCB Editor → File → Fabrication Outputs → **Component Placement (.pos)** → **CSV**.

Assembly file expectations: [PCBWay assembly file requirements](https://www.pcbway.com/assembly-file-requirements.html).

**CPL rotation:** KiCad 0° ≠ every assembler 0°. PCBWay/JLCPCB often want you to check the **online Gerber viewer / CPL preview** and fix rotations (LEDs and SOT-23 are the usual victims). Don’t trust the first .pos file blindly.

**Order notes to paste (2L LED puck)**

- 2 layer, FR4, 1.6 mm, 1 oz, ENIG, white mask / black silk *or* green if cheaper
- Outline: circular + flats + NPTH center hole (not a plated pin)
- Single-sided SMT, no B.Cu parts
- Impedance: none
- Panel: tab-route, not V-score
- Do **not** order IMS unless the stack is reopened

Joe: Gerbers not released until sign-off (`FAB_QUOTE_ONEPAGER.md`).

---

## 7. LED ring routing + power through the center hole

### Topology that fits Ø78 / 12 LEDs

1. **Concentric +12 V belt** (or +12V_SW after the FET/fuse) just **inside or outside** the LED pitch circle — a pour ring, not a 0.3 mm trace.
2. **SINK / cathode belts** per color, or short **MID hops** LED-to-LED on the ring (Joe’s leftover `LED_*_MID` / `CAT` nets).
3. **Radial spokes** from the west/south clusters (buck, FETs, R_limit) to the belts. Don’t cross the disk.
4. **DRV_*** stay on F.Cu in the remaining alleys; if they won’t fit, that’s a placement problem (Joe already hit this on the south rim).

Star-from-center looks pretty and wastes the hole keepout.

### Two wires through Ø5.2 (hot + common)

- Hole is **NPTH**, not a pin.
- **Pads / vias around the hole** on F.Cu for solder cups, **outside** a keepout ring (1–2 mm *est.* from hole wall).
- **Grommet or chamfer** so insulation doesn’t saw on FR4.
- Strain relief: knot, zip, or a dab of RTV on the can side — RV vibration kills soldered wires at the hole.
- Keep **+12 V copper away from the hole wall**. GND pour may approach if the can is GND; still leave a mask/copper ring so a stripped wire can’t short to a via.
- Don’t plate the hole unless you intend a eyelet.

### Current (*est.*, 1 oz)

IPC-2152 is the modern current-capacity reference (supersedes the old 2221 charts). For a **~5 W @ 12 V** puck, **I_total ≈ 0.4 A** all-on — a **0.5 mm** trace is plenty. If a future SKU is several amps, use **2–3 mm belts or pours**, not fat traces across the LEDs.

### Can = heat sink vs can = GND

| Can | TIM pour | Hole |
|-----|----------|------|
| Painted/anodized, isolated | Tie TIM pour to **GND** | Wires insulated; can not a conductor |
| Bare Al, may touch chassis | Decide **one** chassis story | Don’t let +12 V meet the can |

Joe’s path assumes **Al can is the sink**, not a circuit node.

---

## 8. What actually fails on a Ø2.5–3 in board

| Failure | Why on this size | Counter |
|---------|------------------|---------|
| **Unroutable leftovers** | One alley, 12 LEDs + MCU + buck + 4 FETs | Polar belts first; move passives, don’t flip to B.Cu |
| **Tombstoning 2835** | Uneven copper / via-in-pad steal; thermal imbalance | Symmetric pads; no unfilled VIP; balanced copper |
| **Color shift / hot LED** | Uneven pour, few vias, TIM void | Shared TIM island; via field; clamp |
| **Board spins in can** | Round board, no flats / no adhesive | Cardinal flats + TIM tack + optional foam ring |
| **TIM dry-out** | Grease + RV heat cycle | Gap pad |
| **Wire fatigue at hole** | 2-wire pigtail, no strain relief | Grommet + RTV + service loop |
| **CPL rotation** | RGBW 2835 + SOT-23 | Viewer check; freeze LED XY (Joe: r=17.5) |
| **Antenna detune** | Pour/vias under C3 antenna | 12×10 keepout, no TIM vias |
| **South-rim courtyard pileup** | Gate Rg/Rpd vs R_limit vs SINK | Don’t force it — Joe already rolled those back |

**Routing recipe that works at this diameter**

1. Freeze LED XY (optics) and MCU (antenna).
2. Pour B.Cu TIM/GND; stitch vias; **no B.Cu signals**.
3. Route **power belts** (arcs / free-angle).
4. Route **LED series hops** on the ring.
5. Route **FET sources/sinks** as short belts.
6. Leftover GPIO in leftover alleys — if DRC copper errors, **re-place**, don’t sneak B.Cu.
7. DRC 0 errors → plot Gerbers → viewer → CPL rotations → quote.

---

## Do / don’t (card)

**Do**

- 2L FR4 + TIM → Al can at a few watts
- Front-only SMT; B.Cu = TIM pour
- Free-angle + arc belts in KiCad 9 (Shift+Space, Ctrl+/)
- Conservative DRC (0.20 / 0.30 / 0.80-0.40)
- Thermal vias beside pads, tented on the SMT face
- Tab-route panel, ENIG, mask-open TIM
- NPTH center hole + strain relief

**Don’t**

- Orthogonal habit on a ring
- Unfilled via-in-pad on 2835
- IMS by default
- V-score a circle
- PO / signal traces on the TIM face
- Ship Gerbers before DRC + zone refill + CPL preview

---

## Sources

- [KiCad 9 PCB Editor](https://docs.kicad.org/9.0/en/pcbnew/pcbnew.html) — line mode, Shift+Space, arcs, router
- [KiCad.info — free angle vs 45](https://forum.kicad.info/t/how-to-get-single-traces-to-do-horizontal-vertical-and-45/63460)
- [KiCad.info — curved / fillet tracks](https://forum.kicad.info/t/curved-traces-shower-singer-to-professional/46389)
- [PCBWay capabilities](https://www.pcbway.com/capabilities.html)
- [PCBWay min track vs copper weight](https://www.pcbway.com/helpcenter/ordering_parameter_instruction/What_is_the_Min_Track_Spacing_for_1oz__2oz__3oz__Copper_weight_.html)
- [PCBWay KiCad 9 Gerber / BOM / PnP](https://www.pcbway.com/helpcenter/generate_gerber/How_to_Export_Gerber__BOM__and_Pick_and_Place_Files_in_KiCad_9_0.html)
- [PCBWay assembly file requirements](https://www.pcbway.com/assembly-file-requirements.html)
- [PCBWay panel creation](https://www.pcbway.com/pcb_prototype/PCB_Panel_Creation.html)
- [PCBWay aluminum PCB intro](https://www.pcbway.com/pcb_prototype/General_introduction_of_Aluminum_PCB.html)
- [Cree XLamp PCB Thermal](https://downloads.cree-led.com/files/da/x/XLamp-PCB-Thermal.pdf)
- [ams-OSRAM — PCB technologies for LED](https://look.ams-osram.com/m/489c9d95ab91f02f/original/PCB-technologies-for-LED-applications.pdf)
- [Nichia — thermal design of a through-hole substrate](https://led-ld.nichia.co.jp/api/data/spec/tech/SP-QR-C2-210611-1-E_Thermal%20Design%20of%20a%20Through%20Hole%20Substrate%20for%20the%20Heat%20Dissipation%20of%20the%20LEDs.pdf)
