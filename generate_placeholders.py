from PIL import Image, ImageDraw, ImageFont
import os

logos = {
    "waec": {"color": "white", "text": "WAEC"},
    "jamb": {"color": "white", "text": "JAMB"},
    "nelfund": {"color": "white", "text": "NELFUND"},
    "nysc": {"color": "white", "text": "NYSC"},
    "opay": {"color": "white", "text": "OPay"}
}

for name, data in logos.items():
    img = Image.new('RGBA', (200, 60), color=data["color"])
    d = ImageDraw.Draw(img)
    # Since we might not have a TTF font handy, just use default
    d.text((10, 20), f"[ {data['text']} LOGO ]", fill=(0,0,0,255))
    img.save(f"apps/web/public/logos/{name}.png")

