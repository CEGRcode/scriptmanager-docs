---
id: code-snippets
title: Useful Code Snippets
sidebar_label: Useful Code Snippets
---

## `scripts` package
Set of snippets you will often find in the `scripts` package.

### Initializing optionally gzipped writers

Given an output file path and a boolean storing information on gzipping the output, an appropriate BufferedOutputStream (for efficient I/O access) is instantiated while if the

```java
File outpath;
boolean gzOutput;
// ...instantiate outpath and gzOutput
// Initialize output writer
PrintStream OUT = System.out;
if (outpath != null) {
	if (gzOutput) {
		OUT = new PrintStream(new BufferedOutputStream(new GZIPOutputStream(new FileOutputStream(outpath))));
	} else {
		OUT = new PrintStream(new BufferedOutputStream(new FileOutputStream(outpath)));
	}
}
// do stuff
OUT.close()
```

### Parsing optionally gzipped inputs

Checks if input file is gzipped or not, then creates appropriate BufferedReader (for efficient I/O access), and loops through each line with tab-delimited tokenization.
```java
File input;
// ...instantiate input
// Check if file is gzipped and instantiate appropriate BufferedReader
BufferedReader br;
if(GZipUtilities.isGZipped(input)) {
	br = new BufferedReader(new InputStreamReader(new GZIPInputStream(new FileInputStream(input)), "UTF-8"));
} else {
	br = new BufferedReader(new InputStreamReader(new FileInputStream(input), "UTF-8"));
}
// Initialize line variable to loop through
String line = br.readLine();
while (line != null) {
	String[] temp = line.split("\t");
	// do stuff
	line = br.readLine();
}
br.close()
```

## UI snippets
Set of snippets you will often find in the `window_interface` package.

### Color Selection Button
Creates `JButton` object that instantiates a `JColorChooser` dialog when clicked. When the user selects a color, the `setForeground` method is called to set the text color of the JButton object to match the color selected by  the user.

```
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JColorChooser;
// ...
btnSenseColor = new JButton("Sense Color");
// format the position of the button
//  e.g.
//   sl_contentPane.putConstraint(...args...);
btnSenseColor.addActionListener(new ActionListener() {
	public void actionPerformed(ActionEvent arg0) {
		btnSenseColor.setForeground(JColorChooser.showDialog(btnSenseColor, "Select an Output Color",
				btnSenseColor.getForeground()));
	}
});
btnSenseColor.setForeground(new Color(0, 0, 255));
contentPane.add(btnSenseColor);
```

## JavaDocs snippets

### cli class

Template for the `cli.*.*CLI` class doc.
```
/**
 * Command line interface class for _______________ by calling the methods implemented in the scripts package.
 *
 * @author First Last
 * @see scripts.<ToolGroup>.<ToolScript>
 */
```

### Window class

Template for the `window_interface.*.*Window` class doc.
```
/**
 * Graphical interface window for _______________ by calling the methods implemented in the scripts package.
 *
 * @author First Last
 * @see scripts.<ToolGroup>.<ToolScript>
 */
```

Template for the `Task` subclass within the `window_interface.*.*Window` class.
```
	/**
	 * Organize user inputs for calling script.
	 */
```

Template for the `JFrame` window component design and instantiation within the `window_interface.*.*Window` class.
```
	/**
	 * Instantiate window with graphical interface design.
	 */
```

### script class
Template for the `scripts.*.*` class doc.
```
	/**
	 * This class contains scripts for __________________.
	 *
	 * @author First Last
	 * @see cli.<ToolGroup>.<ToolName>CLI
	 * @see window_interface.<ToolGroup>.<ToolName>Window
	 */
