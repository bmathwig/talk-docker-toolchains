# Start npm-shell Container
Invoke-Expression "docker inspect --format='{{.State.Status}}' npm-shell" -ErrorVariable err -OutVariable out 2>&1 > $null

if ($err) {
    Write-Host 'Creating npm-shell Container...' -ForegroundColor Blue
    docker run -dt --name npm-shell -v ${PWD}/GroceryApp:/project -w '/project' node:alpine sh
} elseif ($out -eq "exited") {
    Write-Host 'Starting npm-shell Container...' -ForegroundColor Blue
    docker start npm-shell
}

# Start dotnet-shell Container
Invoke-Expression "docker inspect --format='{{.State.Status}}' dotnet-shell" -ErrorVariable err -OutVariable out 2>&1 > $null

if ($err) {
    Write-Host 'Creating dotnet-shell Container...' -ForegroundColor Blue
    docker run -dt --name dotnet-shell -v ${PWD}/BananaService:/project -w '/project' microsoft/aspnetcore-build
} elseif ($out -eq "exited") {
    Write-Host 'Starting dotnet-shell Container...' -ForegroundColor Blue
    docker start dotnet-shell
}

# Start go-shell Container
Invoke-Expression "docker inspect --format='{{.State.Status}}' go-shell" -ErrorVariable err -OutVariable out 2>&1 > $null

if ($err) {
    Write-Host 'Creating go-shell Container...' -ForegroundColor Blue
    docker run -dt --name go-shell -v ${PWD}/PotatoService:/go -w '/project' golang:alpine sh
} elseif ($out -eq "exited") {
    Write-Host 'Starting go-shell Container...' -ForegroundColor Blue
    docker start go-shell
}

# Convenience Functions
function npm {
    docker exec -it npm-shell npm @args
}

function dotnet {
    docker exec -it dotnet-shell dotnet @args
}

function go {
    docker exec -it go-shell go @args
}

function prompt {
    Write-Host "[Bananas] " -NoNewline -ForegroundColor Red
    Write-Host $(Get-Location) -NoNewline
    Write-Host '> ' -NoNewline
    return ' '
}

function shell-cleanup {
    Write-Host 'Shutting Down Docker Containers'
    docker rm --force npm-shell
    docker rm --force go-shell
    docker rm --force dotnet-shell
}