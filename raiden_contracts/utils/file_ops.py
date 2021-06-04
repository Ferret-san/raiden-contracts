import json
from json import JSONDecodeError
from pathlib import Path
from typing import Any, Dict, Optional


def load_json_from_path(f: Path) -> Optional[Dict[str, Any]]:
    print("File: ", f)

    try:
        with f.open() as deployment_file:
            print("File found!")
            print(json.load(deployment_file))
            return json.load(deployment_file)
    except FileNotFoundError:
        print("File not found")
        return None
    except (JSONDecodeError, UnicodeDecodeError) as ex:
        raise ValueError(f"Deployment data file is corrupted: {ex}") from ex
