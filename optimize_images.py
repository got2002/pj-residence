import os
from PIL import Image

def optimize_images(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            
            # Skip if already optimized or is a generated webp
            if filename.endswith('.webp'):
                continue
                
            try:
                with Image.open(filepath) as img:
                    # Resize if too large (e.g. > 1920px width)
                    if img.width > 1920:
                        ratio = 1920 / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename} to 1920px width")

                    # Save as WebP
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_filepath = os.path.join(directory, new_filename)
                    
                    img.save(new_filepath, 'WEBP', quality=80)
                    
                    old_size = os.path.getsize(filepath)
                    new_size = os.path.getsize(new_filepath)
                    reduction = (old_size - new_size) / old_size * 100
                    
                    print(f"Converted {filename}: {old_size/1024:.1f}KB -> {new_size/1024:.1f}KB (-{reduction:.1f}%)")
                    
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    target_dir = os.path.join(os.getcwd(), 'public', 'images')
    print(f"Optimizing images in {target_dir}...")
    optimize_images(target_dir)
