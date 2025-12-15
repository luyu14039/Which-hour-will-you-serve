import re
import os

def migrate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find aspect and value and replace with values object
    # Matches: aspect: 'Lantern', value: 1
    # Also handles newlines and spaces
    pattern = r"aspect:\s*'([^']+)',\s*value:\s*(\d+)"
    
    def replacement(match):
        aspect = match.group(1)
        value = match.group(2)
        return f"values: {{ '{aspect}': {value} }}"

    new_content = re.sub(pattern, replacement, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Migrated {filepath}")

migrate_file(r"d:\projects\GIT\Which-hour-will-you-serve\src\data\questions.ts")
migrate_file(r"d:\projects\GIT\Which-hour-will-you-serve\src\data\reality_questions.ts")
