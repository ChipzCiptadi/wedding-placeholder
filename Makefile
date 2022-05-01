.PHONY: tailwind
tailwind:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --minify

.PHONY: tailwind-watch
tailwind-watch:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch