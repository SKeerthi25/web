Add-Type -AssemblyName System.Drawing

function Generate-YasodhIcon {
    param (
        [int]$size,
        [string]$outputPath
    )

    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # Clear transparent
    $g.Clear([System.Drawing.Color]::Transparent)

    # Scale factor
    [float]$scale = [float]$size / 64.0

    # Draw rounded rect badge
    [float]$radius = 13.0 * $scale
    [float]$diameter = $radius * 2.0
    [float]$fSize = [float]$size

    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddArc(0.0, 0.0, $diameter, $diameter, 180.0, 90.0)
    $path.AddArc($fSize - $diameter, 0.0, $diameter, $diameter, 270.0, 90.0)
    $path.AddArc($fSize - $diameter, $fSize - $diameter, $diameter, $diameter, 0.0, 90.0)
    $path.AddArc(0.0, $fSize - $diameter, $diameter, $diameter, 90.0, 90.0)
    $path.CloseFigure()

    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 9, 13, 22))
    $g.FillPath($bgBrush, $path)

    # Glowing border
    [float]$penWidth = [Math]::Max(1.5 * $scale, 1.0)
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 56, 189, 248), $penWidth)
    $g.DrawPath($borderPen, $path)

    # Tech Y coordinates
    [float]$x1 = 18.0 * $scale
    [float]$y1 = 16.0 * $scale
    [float]$x2 = 46.0 * $scale
    [float]$y2 = 16.0 * $scale
    [float]$xc = 32.0 * $scale
    [float]$yc = 34.0 * $scale
    [float]$yb = 48.0 * $scale

    [float]$strokeW = [Math]::Max(5.5 * $scale, 2.0)
    $leftPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 2, 132, 199), $strokeW)
    $leftPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $leftPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    $rightPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 56, 189, 248), $strokeW)
    $rightPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $rightPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    $stemPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 6, 182, 212), $strokeW)
    $stemPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $stemPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    # Draw lines
    $g.DrawLine($leftPen, $x1, $y1, $xc, $yc)
    $g.DrawLine($rightPen, $x2, $y2, $xc, $yc)
    $g.DrawLine($stemPen, $xc, $yc, $xc, $yb)

    # Node circles
    [float]$nodeR = 3.0 * $scale
    [float]$nodeD = $nodeR * 2.0
    [float]$nodeRC = 3.8 * $scale
    [float]$nodeDC = $nodeRC * 2.0

    $brushSky = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 56, 189, 248))
    $brushCyan = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 6, 182, 212))
    $brushBlue = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 2, 132, 199))
    $brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 224, 242, 254))

    # Center node
    $g.FillEllipse($brushWhite, ($xc - $nodeRC), ($yc - $nodeRC), $nodeDC, $nodeDC)
    # Top-left node
    $g.FillEllipse($brushSky, ($x1 - $nodeR), ($y1 - $nodeR), $nodeD, $nodeD)
    # Top-right node
    $g.FillEllipse($brushCyan, ($x2 - $nodeR), ($y2 - $nodeR), $nodeD, $nodeD)
    # Bottom node
    $g.FillEllipse($brushBlue, ($xc - $nodeR), ($yb - $nodeR), $nodeD, $nodeD)

    # Save PNG
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

    # Cleanup
    $borderPen.Dispose()
    $leftPen.Dispose()
    $rightPen.Dispose()
    $stemPen.Dispose()
    $brushSky.Dispose()
    $brushCyan.Dispose()
    $brushBlue.Dispose()
    $brushWhite.Dispose()
    $bgBrush.Dispose()
    $path.Dispose()
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Generated: $outputPath ($size x $size px)"
}

Generate-YasodhIcon -size 48 -outputPath "c:\Downloads\yaso\public\favicon-48x48.png"
Generate-YasodhIcon -size 96 -outputPath "c:\Downloads\yaso\public\favicon-96x96.png"
Generate-YasodhIcon -size 180 -outputPath "c:\Downloads\yaso\public\apple-touch-icon.png"
Generate-YasodhIcon -size 192 -outputPath "c:\Downloads\yaso\public\favicon-192x192.png"
Generate-YasodhIcon -size 512 -outputPath "c:\Downloads\yaso\public\logo512.png"
