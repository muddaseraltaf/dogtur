#!/usr/bin/env python3
"""Wire affiliate links into Dogtur buying guides.
- Sets type: comparison on the 14 buying guides (triggers ReviewLayout + DisclosureBox).
- Inserts an affiliate CTA button after each product section/paragraph.
Run from ~/workspace/dogtur. Idempotent: skips products that already have a button.
"""
import pathlib
import re

ROOT = pathlib.Path("src/content/articles")

AFF = "nofollow sponsored noopener"
PLAIN = "nofollow noopener"

def btn(url, kind):
    label = "Check price on Amazon" if kind == "aff" else "View on Amazon"
    cls = "affiliate-btn" if kind == "aff" else "affiliate-btn plain"
    rel = AFF if kind == "aff" else PLAIN
    return (f'<p><a class="{cls}" href="{url}" target="_blank" '
            f'rel="{rel}">{label}</a></p>')

# (file, format, [(match_key, url, kind)])  kind: aff | plain | none
GUIDES = [
    ("best-joint-supplements-senior-dogs.md", "A", [
        ("Dasuquin with ASU", "https://amzn.to/4hnVKs5", "aff"),
        ("Cosequin DS + MSM", "https://amzn.to/4houcD3", "aff"),
        ("Dasuquin for Senior Dogs", "https://amzn.to/4iYaGyo", "aff"),
        ("Dasuquin Advanced", None, "none"),
        ("Flexadin Advanced", "https://amzn.to/4jrZBFW", "aff"),
        ("PetLab Co.", "https://amzn.to/47ppsHk", "aff"),
        ("Zesty Paws", "https://amzn.to/47rVMcx", "aff"),
    ]),
    ("best-orthopedic-dog-beds-senior-dogs.md", "A", [
        ("Big Barker Original", "https://amzn.to/4hz38jj", "aff"),
        ("PetFusion Ultimate", "https://amzn.to/4xZxnG1", "aff"),
        ("BullyBeds", None, "none"),
        ("Bedsure Orthopedic", "https://amzn.to/3TbSgji", "aff"),
        ("FurHaven Ultra Plush Lounger", "https://amzn.to/4iTryGv", "aff"),
        ("Casper Dog Bed", "https://amzn.to/4yf7ToB", "aff"),
    ]),
    ("best-dog-food-senior-dogs.md", "A", [
        ("Hill's Science Diet Adult 7+", "https://amzn.to/4yZUm4W", "aff"),
        ("Purina Pro Plan Bright Mind 7+", "https://amzn.to/47rW0jT", "aff"),
        ("Royal Canin Aging", "https://amzn.to/4z7fNRx", "aff"),
        ("Blue Buffalo Life Protection Formula Senior", "https://amzn.to/4z2JVgP", "aff"),
        ("Blue Buffalo Basics Limited-Ingredient Senior", None, "none"),  # wet listing vs dry article
        ("Wellness CORE Age Advantage", "https://amzn.to/4z8mjr5", "aff"),
        ("Purina ONE SmartBlend Vibrant Maturity 7+", "https://amzn.to/4z9zJTX", "aff"),
        ("The Farmer's Dog", None, "none"),
    ]),
    ("best-dog-ramps-senior-dogs.md", "A", [
        ("Gen7Pets Natural-Step Ramp 72", "https://amzn.to/4z8cSbk", "aff"),
        ("PetSafe Happy Ride Folding", "https://amzn.to/4ykHeHv", "aff"),
        ("PetSafe Happy Ride Telescoping", "https://amzn.to/4ywx2vW", "aff"),
        ("Gen7Pets Indoor-Carpet Mini Ramp", None, "none"),
        ("PetSafe CozyUp Bed Ramp", "https://amzn.to/4yICwUt", "aff"),
    ]),
    ("best-dog-beds-for-golden-retrievers.md", "B", [
        ("Big Barker 7", "https://amzn.to/4hz38jj", "aff"),
        ("PetFusion Ultimate (XL", "https://amzn.to/4xZxnG1", "aff"),
        ("Bedsure Orthopedic.", "https://amzn.to/3TbSgji", "aff"),
        ("FurHaven (memory-foam models).", "https://amzn.to/4iTryGv", "aff"),
    ]),
    ("dog-proof-trash-cans.md", "B", [
        ("simplehuman 50-liter", "https://amzn.to/4AJkkv7", "aff"),
        ("iTouchless 13-gallon", "https://amzn.to/4ywx472", "aff"),
        ("Tramontina 13-gallon", None, "none"),
        ("Sterilite 12.6-gallon", None, "none"),
    ]),
    ("best-waterproof-dog-collars.md", "B", [
        ("Fable Pets Signature Collar.", None, "none"),
        ("Ruffwear Headwater.", None, "none"),
        ("Tuff Pupper Classic Heavy Duty.", "https://www.amazon.com/dp/B0863X178G", "plain"),
        ("CollarDirect waterproof (budget).", "https://amzn.to/3VdfFS3", "aff"),
    ]),
    ("best-dog-food-for-less-poop.md", "B", [
        ("Hill's Science Diet Adult Sensitive Stomach & Skin.", "https://www.amazon.com/dp/B003MW7790", "plain"),
        ("Purina Pro Plan Sensitive Skin & Stomach (Salmon & Rice).", None, "none"),
        ("Diamond Naturals (Chicken & Rice).", "https://amzn.to/4jysyjq", "aff"),
        ("Wellness CORE (grain-free or wholesome-grains recipes).", "https://amzn.to/3TiWoxX", "aff"),
        ("Royal Canin Gastrointestinal (veterinary diet).", "https://amzn.to/3VgUL4t", "aff"),
    ]),
    ("best-dog-food-for-yorkies.md", "B", [
        ("Royal Canin Yorkshire Terrier Adult.", "https://amzn.to/4jwnsEm", "aff"),
        ("Hill's Science Diet Small & Mini Adult.", "https://amzn.to/4jxMd2X", "aff"),
        ("Wellness CORE Small Breed.", "https://amzn.to/3Tu5V5m", "aff"),
        ("Blue Buffalo Life Protection Small Breed.", "https://amzn.to/4ho3L0g", "aff"),
    ]),
    ("best-high-fiber-dog-food.md", "B", [
        ("Royal Canin Gastrointestinal High Fibre", None, "none"),
        ("Hill's Prescription Diet w/d Multi-Benefit", "https://amzn.to/4rEcWgm", "aff"),
        ("Hill's Science Diet Adult Perfect Weight", "https://amzn.to/4rGieYE", "aff"),
        ("Nutro Natural Choice Healthy Weight", "https://amzn.to/4rDwX6O", "aff"),
        ("Glandex Soft Chews (Vetnique Labs).", "https://amzn.to/4hFOoz3", "aff"),
        ("Plain canned pumpkin.", "https://amzn.to/4jxufOa", "aff"),
    ]),
    ("best-dog-food-for-boston-terrier.md", "B", [
        ("Purina Pro Plan Sensitive Skin & Stomach (Salmon & Rice).", None, "none"),
        ("Hill's Science Diet Adult Sensitive Stomach & Skin.", "https://www.amazon.com/dp/B003MW7790", "plain"),
        ("Diamond Naturals Small Breed.", "https://amzn.to/4jxMiDN", "aff"),
        ("Natural Balance L.I.D.", "https://amzn.to/3TssQhn", "aff"),
    ]),
    ("best-dog-food-for-allergies-and-yeast-infection.md", "B", [
        ("Royal Canin Hydrolyzed Protein HP", None, "none"),
        ("Natural Balance L.I.D. (Limited Ingredient Diets).", "https://amzn.to/3TssQhn", "aff"),
    ]),
    ("best-dog-foods-for-hypothyroidism.md", "B", [
        ("Royal Canin Satiety Support", None, "none"),
        ("Hill's Science Diet Adult Perfect Weight.", "https://amzn.to/4rGieYE", "aff"),
        ("Purina Pro Plan Weight Management.", "https://amzn.to/4jwnEDA", "aff"),
        ("Wellness CORE Healthy Weight.", "https://amzn.to/4s06YXD", "aff"),
    ]),
    ("best-dog-foods-for-american-bully.md", "B", [
        ("VICTOR Hi-Pro Plus (30/20).", "https://amzn.to/4hZn0fN", "aff"),
        ("Bully Max 30/20.", "https://amzn.to/4hxCsiO", "aff"),
        ("Bully Max 25/11.", "https://amzn.to/4hG5ixH", "aff"),
        ("Taste of the Wild Wetlands.", None, "none"),  # canned listing vs dry article
        ("Diamond Naturals.", "https://amzn.to/4jysyjq", "aff"),
        ("Nulo Freestyle.", "https://amzn.to/4xQN967", "aff"),
    ]),
]

inserted = 0
skipped_none = 0
problems = []

for fname, fmt, products in GUIDES:
    path = ROOT / fname
    text = path.read_text()
    lines = text.split("\n")

    # 1) flip type to comparison (frontmatter only, before first --- close)
    fm_end = None
    for i, ln in enumerate(lines[:30]):
        if i > 0 and ln.strip() == "---":
            fm_end = i
            break
    if fm_end:
        for i in range(fm_end):
            if lines[i].startswith("type: informational"):
                lines[i] = "type: comparison"

    for key, url, kind in products:
        if kind == "none" or not url:
            skipped_none += 1
            continue
        # already wired?
        if url in text:
            continue
        html = btn(url, kind)
        if fmt == "A":
            # find "### ...key..."
            h_idx = next((i for i, ln in enumerate(lines)
                          if ln.startswith("### ") and key in ln), None)
            if h_idx is None:
                problems.append(f"{fname}: heading not found for '{key}'")
                continue
            # section ends at next ## or ### heading
            end = next((i for i in range(h_idx + 1, len(lines))
                        if lines[i].startswith("## ") or lines[i].startswith("### ")), len(lines))
            lines.insert(end, html + "\n")
            text = "\n".join(lines)
            inserted += 1
        else:
            # find bold-led product paragraph start: line starts with **key
            p_idx = next((i for i, ln in enumerate(lines)
                          if ln.startswith("**") and key in ln), None)
            if p_idx is None:
                problems.append(f"{fname}: paragraph not found for '{key}'")
                continue
            # paragraph ends at first blank line after p_idx
            end = next((i for i in range(p_idx, len(lines))
                        if lines[i].strip() == ""), len(lines))
            lines.insert(end, "\n" + html)
            text = "\n".join(lines)
            inserted += 1

    path.write_text("\n".join(lines) if isinstance(lines, list) else lines)

print(f"inserted: {inserted}, skipped (no link): {skipped_none}")
for p in problems:
    print("PROBLEM:", p)
