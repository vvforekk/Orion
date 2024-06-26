import { extensionColors } from "@/theme/extensions/index.ts";
import { Color, PaletteType } from "@/types/index.ts";

export const uiColors = (
  palette: PaletteType,
): Record<string, string | Color> => ({
  // Contrast
  // "contrastActiveBorder": palette.border.active,
  // "contrastBorder": palette.border.default,

  // Base
  focusBorder: palette.border.muted,
  foreground: palette.text.default,
  disabledForeground: palette.primaryA[6],
  "widget.border": palette.border.active,
  "widget.shadow": palette.shadow[11],
  "selection.background": palette.primaryA[7],
  descriptionForeground: palette.text.default,
  errorForeground: palette.status.error[10],
  "icon.foreground": palette.text.default,
  "sash.hoverBorder": palette.border.sash,

  // Window border
  "window.activeBorder": palette.bg.default,
  "window.inactiveBorder": palette.border.muted,

  // Text
  "textBlockQuote.background": palette.bg.muted,
  // "textBlockQuote.border": "",
  "textCodeBlock.background": palette.bg.muted,
  "textLink.activeForeground": palette.status.info[12],
  "textLink.foreground": palette.status.info[11],
  "textPreformat.foreground": palette.text.muted,
  "textSeparator.foreground": palette.border.muted,

  // Action
  "toolbar.hoverBackground": palette.bg.hovered,
  // "toolbar.hoverOutline": palette.border.default,
  "toolbar.activeBackground": palette.bg.active,

  // Button
  "button.background": palette.accent[12],
  "button.foreground": palette.text.badge,
  // "button.border": palette.accent[12],
  "button.separator": palette.accent[8],
  "button.hoverBackground": palette.accent[11],

  "button.secondaryBackground": palette.bg.default,
  "button.secondaryForeground": palette.text.deep,
  "button.secondaryHoverBackground": palette.bg.hovered,

  "checkbox.background": palette.bg.deep,
  "checkbox.foreground": palette.accent[12],
  // "checkbox.border": palette.border.default,
  "checkbox.selectBackground": palette.accent[8],
  "checkbox.selectBorder": palette.accent[12],

  // Dropdown
  "dropdown.background": palette.bg.deep,
  "dropdown.listBackground": palette.bg.hovered,
  "dropdown.border": palette.border.default,
  "dropdown.foreground": palette.text.default,

  // Input
  "input.background": palette.bg.deep,
  "input.border": palette.border.default,
  "input.foreground": palette.text.default,
  "input.placeholderForeground": palette.border.active,

  "inputOption.activeBackground": palette.bg.active,
  "inputOption.activeBorder": palette.border.active,
  "inputOption.activeForeground": palette.text.deep,
  "inputOption.hoverBackground": palette.text.default,

  "inputValidation.errorBackground": palette.status.error[9],
  "inputValidation.errorForeground": palette.text.deep,
  "inputValidation.errorBorder": palette.status.error[11],

  "inputValidation.infoBackground": palette.status.info[9],
  "inputValidation.infoForeground": palette.text.deep,
  "inputValidation.infoBorder": palette.status.info[11],

  "inputValidation.warningBackground": palette.status.warning[11],
  "inputValidation.warningForeground": palette.text.deep,
  "inputValidation.warningBorder": palette.status.warning[9],

  // Scrollbar
  "scrollbar.shadow": palette.shadow[11],
  "scrollbarSlider.background": palette.primaryA[4],
  "scrollbarSlider.hoverBackground": palette.primaryA[5],
  "scrollbarSlider.activeBackground": palette.primaryA[6],

  // Badge
  "badge.foreground": palette.text.badge,
  "badge.background": palette.accent[12],

  // Progress bar
  "progressBar.background": palette.accent[12],

  // Lists and trees
  "list.activeSelectionBackground": palette.bg.active,
  "list.activeSelectionForeground": palette.text.deep,
  "list.activeSelectionIconForeground": palette.accent[12],
  "list.dropBackground": palette.bg.drop,
  "list.focusBackground": palette.bg.default,
  "list.focusForeground": palette.text.deep,
  "list.focusHighlightForeground": palette.accent[12],
  "list.focusOutline": palette.border.muted,
  "list.focusAndSelectionOutline": palette.border.active,
  "list.highlightForeground": palette.text.deep,
  "list.hoverBackground": palette.bg.muted,
  "list.hoverForeground": palette.text.deep,
  "list.inactiveSelectionForeground": palette.text.deep,
  "list.inactiveSelectionIconForeground": palette.accent[12],
  "list.inactiveSelectionBackground": palette.bg.hovered,
  "list.inactiveFocusBackground": palette.bg.default,
  "list.inactiveFocusOutline": palette.border.muted,
  "list.invalidItemForeground": palette.status.error[11],
  "list.errorForeground": palette.status.error[11],
  "list.warningForeground": palette.status.warning[11],
  "listFilterWidget.background": palette.bg.hovered,
  "listFilterWidget.outline": palette.border.active,
  "listFilterWidget.noMatchesOutline": palette.status.error[11],
  "listFilterWidget.shadow": palette.shadow[11],
  "list.filterMatchBackground": palette.status.success[8],
  // "list.filterMatchBorder": "",
  "list.deemphasizedForeground": palette.text.muted,

  "tree.indentGuidesStroke": palette.border.default,
  "tree.inactiveIndentGuidesStroke": palette.bg.active,
  "tree.tableColumnsBorder": palette.border.default,
  // "tree.tableOddRowsBackground": "",

  // Activity bar
  "activityBar.background": palette.bg.deep,
  "activityBar.dropBorder": palette.bg.drop,
  "activityBar.foreground": palette.text.deep,
  "activityBar.inactiveForeground": palette.text.muted,
  // "activityBar.border": palette.border.default,
  "activityBarBadge.background": palette.accent[12],
  "activityBarBadge.foreground": palette.text.badge,
  "activityBar.activeBorder": palette.accent[12],
  "activityBar.activeBackground": palette.accent[5],
  // "activityBar.activeFocusBorder": "",

  // Profile
  "profileBadge.background": palette.accent[12],
  "profileBadge.foreground": palette.text.badge,

  // Side bar
  "sideBar.background": palette.bg.deep,
  "sideBar.foreground": palette.text.default,
  // "sideBar.border": palette.border.muted,
  "sideBar.dropBackground": palette.bg.drop,
  "sideBarTitle.foreground": palette.text.deep,
  "sideBarSectionHeader.background": palette.bg.muted,
  "sideBarSectionHeader.foreground": palette.text.default,
  // "sideBarSectionHeader.border": palette.border.default,

  // Mini map
  "minimap.findMatchHighlight": palette.status.match[8],
  "minimap.selectionHighlight": palette.accentA[3],
  "minimap.errorHighlight": palette.status.error[8],
  "minimap.warningHighlight": palette.status.warning[8],
  "minimap.background": palette.bg.deep,
  "minimap.selectionOccurrenceHighlight": palette.primary[8],
  "minimap.foregroundOpacity": "#000000c0",
  "minimapSlider.background": palette.primaryA[2],
  "minimapSlider.hoverBackground": palette.primaryA[3],
  "minimapSlider.activeBackground": palette.primaryA[4],
  "minimapGutter.addedBackground": palette.git.added[8],
  "minimapGutter.modifiedBackground": palette.git.modified[8],
  "minimapGutter.deletedBackground": palette.git.deleted[8],

  // Editor groups and tabs,
  // "editorGroup.border": palette.border.inverted,
  "editorGroup.dropBackground": palette.bg.drop,
  "editorGroupHeader.noTabsBackground": palette.bg.default,
  "editorGroupHeader.tabsBackground": palette.bg.deep,
  // "editorGroupHeader.tabsBorder": palette.border.inverted,
  "editorGroup.emptyBackground": palette.bg.deep,
  // "editorGroup.focusedEmptyBorder": "",
  "editorGroup.dropIntoPromptForeground": palette.text.deep,
  "editorGroup.dropIntoPromptBackground": palette.bg.active,
  // "editorGroup.dropIntoPromptBorder": palette.border.active,

  "tab.activeBackground": palette.bg.deep,
  "tab.unfocusedActiveBackground": palette.bg.hovered,
  "tab.activeForeground": palette.text.deep,
  // "tab.border": palette.border.default,
  // "tab.activeBorder": palette.border.muted,
  // "tab.unfocusedActiveBorder": palette.border.default,
  "tab.activeBorderTop": palette.accent[12],
  "tab.unfocusedActiveBorderTop": palette.accent[9],
  "tab.lastPinnedBorder": palette.accent[12],
  "tab.inactiveBackground": palette.bg.deep,
  "tab.unfocusedInactiveBackground": palette.bg.default,
  // "tab.inactiveForeground": palette.text.muted,
  "tab.unfocusedActiveForeground": palette.text.default,
  "tab.unfocusedInactiveForeground": palette.text.muted,
  "tab.hoverBackground": palette.bg.muted,
  "tab.unfocusedHoverBackground": palette.bg.default,
  "tab.hoverForeground": palette.text.deep,
  "tab.unfocusedHoverForeground": palette.text.default,
  // "tab.hoverBorder": palette.border.active,
  // "tab.unfocusedHoverBorder": palette.border.muted,
  // "tab.activeModifiedBorder": "",
  // "tab.inactiveModifiedBorder": "",
  // "tab.unfocusedActiveModifiedBorder": "",
  // "tab.unfocusedInactiveModifiedBorder": "",

  "editorPane.background": palette.bg.deep,
  "sideBySideEditor.horizontalBorder": palette.border.default,
  "sideBySideEditor.verticalBorder": palette.border.default,

  // Editor
  "editor.background": palette.bg.deep,
  "editor.foreground": palette.text.default,
  "editorLineNumber.foreground": palette.border.default,
  "editorLineNumber.activeForeground": palette.accent[11],
  "editorLineNumber.dimmedForeground": palette.border.muted,

  // "editorCursor.background": palette.bg.deep,
  "editorCursor.foreground": palette.accent[12],

  "editor.selectionBackground": palette.accentA[6],
  "editor.selectionForeground": palette.text.muted,
  "editor.inactiveSelectionBackground": palette.accentA[5],
  "editor.selectionHighlightBackground": palette.accentA[2],
  "editor.selectionHighlightBorder": palette.border.muted,

  "editor.wordHighlightBackground": palette.primaryA[6],
  // "editor.wordHighlightBorder": palette.border.default,
  "editor.wordHighlightStrongBackground": palette.primaryA[6],
  // "editor.wordHighlightStrongBorder": palette.border.default,
  "editor.wordHighlightTextBackground": palette.primaryA[6],
  // "editor.wordHighlightTextBorder": palette.border.default,

  "editor.findMatchBackground": palette.status.match[7],
  "editor.findMatchHighlightBackground": palette.status.matchA[5],
  "editor.findRangeHighlightBackground": palette.status.matchA[5],
  // "editor.findMatchBorder": palette.border.active,
  // "editor.findMatchHighlightBorder": palette.border.default,
  // "editor.findRangeHighlightBorder": palette.border.default,

  "search.resultsInfoForeground": palette.text.deep,
  "searchEditor.findMatchBackground": palette.status.match[3],
  // "searchEditor.findMatchBorder": palette.border.default,
  "searchEditor.textInputBorder": palette.border.active,

  "editor.lineHighlightBackground": palette.primaryA[3],
  // "editor.lineHighlightBorder": palette.border.muted,
  // "editorUnicodeHighlight.border": "",
  // "editorUnicodeHighlight.background": "",
  "editorLink.activeForeground": palette.status.info[12],
  "editor.rangeHighlightBackground": palette.primaryA[6],
  "editor.symbolHighlightBackground": palette.primaryA[6],
  // "editor.symbolHighlightBorder": "",
  "editorWhitespace.foreground": palette.primaryA[6],

  "editorIndentGuide.background1": palette.bg.hovered,
  // "editorIndentGuide.background2": "",
  // "editorIndentGuide.background3": "",
  // "editorIndentGuide.background4": "",
  // "editorIndentGuide.background5": "",
  // "editorIndentGuide.background6": "",
  "editorIndentGuide.activeBackground1": palette.border.active,
  // "editorIndentGuide.activeBackground2": "",
  // "editorIndentGuide.activeBackground3": "",
  // "editorIndentGuide.activeBackground4": "",
  // "editorIndentGuide.activeBackground5": "",
  // "editorIndentGuide.activeBackground6": "",

  "editorInlayHint.foreground": palette.text.default,
  "editorInlayHint.background": palette.bg.active,
  "editorInlayHint.typeForeground": palette.text.default,
  "editorInlayHint.typeBackground": palette.bg.active,
  "editorInlayHint.parameterForeground": palette.text.default,
  "editorInlayHint.parameterBackground": palette.bg.active,

  "editorRuler.foreground": palette.border.muted,
  "editor.linkedEditingBackground": palette.primaryA[6],

  "editorCodeLens.foreground": palette.text.default,

  "editorLightBulb.foreground": palette.status.hint[12],
  "editorLightBulbAutoFix.foreground": palette.status.hint[11],

  "editorBracketMatch.background": palette.bg.active,
  "editorBracketMatch.border": palette.accent[11],

  "editorBracketHighlight.unexpectedBracket.foreground":
    palette.status.error[10],

  "editorBracketHighlight.foreground1": palette.gradiation[1],
  "editorBracketHighlight.foreground2": palette.gradiation[2],
  "editorBracketHighlight.foreground3": palette.gradiation[3],
  "editorBracketHighlight.foreground4": palette.gradiation[4],
  "editorBracketHighlight.foreground5": palette.gradiation[5],
  "editorBracketHighlight.foreground6": palette.gradiation[6],

  "editorBracketPairGuide.activeBackground1": palette.accent[11],
  "editorBracketPairGuide.activeBackground2": palette.accent[11],
  "editorBracketPairGuide.activeBackground3": palette.accent[11],
  "editorBracketPairGuide.activeBackground4": palette.accent[11],
  "editorBracketPairGuide.activeBackground5": palette.accent[11],
  "editorBracketPairGuide.activeBackground6": palette.accent[11],

  "editorBracketPairGuide.background1": palette.gradiation[1],
  "editorBracketPairGuide.background2": palette.gradiation[2],
  "editorBracketPairGuide.background3": palette.gradiation[3],
  "editorBracketPairGuide.background4": palette.gradiation[4],
  "editorBracketPairGuide.background5": palette.gradiation[5],
  "editorBracketPairGuide.background6": palette.gradiation[6],

  "editor.foldBackground": palette.bg.hovered,

  "editorOverviewRuler.background": palette.bg.deep,
  "editorOverviewRuler.border": palette.bg.deep,
  "editorOverviewRuler.findMatchForeground": palette.status.matchA[9],
  "editorOverviewRuler.rangeHighlightForeground": palette.primaryA[9],
  "editorOverviewRuler.selectionHighlightForeground": palette.accentA[9],
  "editorOverviewRuler.wordHighlightForeground": palette.primaryA[9],
  "editorOverviewRuler.wordHighlightStrongForeground": palette.primaryA[9],
  "editorOverviewRuler.wordHighlightTextForeground": palette.primaryA[9],
  "editorOverviewRuler.errorForeground": palette.status.error[9],
  "editorOverviewRuler.warningForeground": palette.status.warning[9],
  "editorOverviewRuler.infoForeground": palette.status.info[9],
  "editorOverviewRuler.addedForeground": palette.git.added[9],
  "editorOverviewRuler.modifiedForeground": palette.git.modified[9],
  "editorOverviewRuler.deletedForeground": palette.git.deleted[9],
  "editorOverviewRuler.bracketMatchForeground": palette.accent[9],

  "editorError.foreground": palette.status.error[11],
  // "editorError.border": "",
  // "editorError.background": "",
  "editorWarning.foreground": palette.status.warning[11],
  // "editorWarning.border": "",
  // "editorWarning.background": "",
  "editorInfo.foreground": palette.status.info[11],
  // "editorInfo.border": "",
  // "editorInfo.background": "",

  // "editorHint.foreground": "",
  // "editorHint.border": "",

  "problemsErrorIcon.foreground": palette.status.error[11],
  "problemsWarningIcon.foreground": palette.status.warning[11],
  "problemsInfoIcon.foreground": palette.status.info[11],

  // "editorUnnecessaryCode.border": "",
  "editorUnnecessaryCode.opacity": "#000000c0",

  "editorGutter.background": palette.bg.deep,
  "editorGutter.addedBackground": palette.git.added[8],
  "editorGutter.modifiedBackground": palette.git.modified[8],
  "editorGutter.deletedBackground": palette.git.deleted[8],
  // "editorGutter.commentRangeForeground": "",
  // "editorGutter.commentGlyphForeground": "",
  // "editorGutter.commentUnresolvedGlyphForeground": "",
  "editorGutter.foldingControlForeground": palette.text.muted,

  // "editorCommentsWidget.resolvedBorder": "",
  // "editorCommentsWidget.unresolvedBorder": "",
  // "editorCommentsWidget.rangeBackground": "",
  // "editorCommentsWidget.rangeBorder": "",
  // "editorCommentsWidget.rangeActiveBackground": "",
  // "editorCommentsWidget.rangeActiveBorder": "",

  // Diff editor
  "diffEditor.insertedTextBackground": palette.diff.insertedA[5],
  // "diffEditor.insertedTextBorder": "",
  "diffEditor.removedTextBackground": palette.diff.removedA[5],
  // "diffEditor.removedTextBorder": "",
  "diffEditor.border": palette.bg.deep,
  "diffEditor.diagonalFill": palette.border.muted,
  "diffEditor.insertedLineBackground": palette.diff.insertedA[3],
  "diffEditor.removedLineBackground": palette.diff.removedA[3],
  "diffEditorOverview.insertedForeground": palette.diff.insertedA[9],
  "diffEditorOverview.removedForeground": palette.diff.removedA[9],
  "diffEditor.unchangedRegionBackground": palette.bg.default,
  "diffEditor.unchangedRegionForeground": palette.text.default,
  "diffEditor.unchangedCodeBackground": palette.bg.default,
  // "diffEditor.move.border": "",

  // Chat
  // "chat.requestBackground": "",
  // "chat.requestBorder": "",

  // Inline chat
  // "inlineChat.background": "",
  // "inlineChat.border": "",
  // "inlineChat.shadow": "",
  // "inlineChat.regionHighlight": "",
  // "inlineChatInput.border": "",
  // "inlineChatInput.focusBorder": "",
  // "inlineChatInput.placeholderForeground": "",
  // "inlineChatInput.background": "",
  // "inlineChatDiff.inserted": "",
  // "inlineChatDiff.removed": "",

  // Editor widget
  "editorWidget.foreground": palette.text.default,
  "editorWidget.background": palette.bg.hovered,
  "editorWidget.border": palette.border.muted,
  "editorWidget.resizeBorder": palette.border.sash,

  "editorSuggestWidget.background": palette.bg.hovered,
  "editorSuggestWidget.border": palette.border.active,
  "editorSuggestWidget.foreground": palette.text.default,
  "editorSuggestWidget.focusHighlightForeground": palette.text.deep,
  "editorSuggestWidget.highlightForeground": palette.text.muted,
  "editorSuggestWidget.selectedBackground": palette.bg.active,
  "editorSuggestWidget.selectedForeground": palette.text.deep,
  "editorSuggestWidget.selectedIconForeground": palette.accent[12],
  "editorSuggestWidgetStatus.foreground": palette.text.muted,

  "editorHoverWidget.foreground": palette.text.default,
  "editorHoverWidget.background": palette.bg.hovered,
  "editorHoverWidget.border": palette.border.active,
  "editorHoverWidget.highlightForeground": palette.text.deep,
  "editorHoverWidget.statusBarBackground": palette.bg.active,

  // "editorGhostText.border": "",
  // "editorGhostText.background": palette.bg.default,
  "editorGhostText.foreground": palette.text.muted,

  "editorStickyScroll.background": palette.bg.default,
  "editorStickyScrollHover.background": palette.bg.muted,

  // "debugExceptionWidget.background": "",
  // "debugExceptionWidget.border": "",

  "editorMarkerNavigation.background": palette.bg.hovered,
  "editorMarkerNavigationError.background": palette.bg.hovered,
  "editorMarkerNavigationWarning.background": palette.bg.hovered,
  "editorMarkerNavigationInfo.background": palette.bg.hovered,
  "editorMarkerNavigationError.headerBackground": palette.status.error[5],
  "editorMarkerNavigationWarning.headerBackground": palette.status.warning[5],
  "editorMarkerNavigationInfo.headerBackground": palette.text.deep,

  // Peek view
  "peekView.border": palette.accent[9],
  "peekViewEditor.background": palette.bg.default,
  "peekViewEditorGutter.background": palette.bg.default,
  "peekViewEditor.matchHighlightBackground": palette.status.matchA[6],
  // "peekViewEditor.matchHighlightBorder": "",
  "peekViewEditorStickyScroll.background": palette.bg.muted,
  "peekViewResult.background": palette.bg.deep,
  "peekViewResult.fileForeground": palette.text.default,
  "peekViewResult.lineForeground": palette.text.default,
  "peekViewResult.matchHighlightBackground": palette.status.matchA[6],
  "peekViewResult.selectionBackground": palette.primaryA[5],
  "peekViewResult.selectionForeground": palette.text.deep,
  "peekViewTitle.background": palette.accent[5],
  "peekViewTitleDescription.foreground": palette.text.default,
  "peekViewTitleLabel.foreground": palette.text.deep,

  // Merge conflicts

  // Panel
  "panel.background": palette.bg.deep,
  "panel.border": palette.border.default,
  "panel.dropBorder": palette.accent[8],
  "panelTitle.activeBorder": palette.accent[12],
  "panelTitle.activeForeground": palette.text.deep,
  "panelTitle.inactiveForeground": palette.text.muted,
  "panelInput.border": palette.border.muted,
  // "panelSection.border": "",
  "panelSection.dropBackground": palette.accentA[6],
  "panelSectionHeader.background": palette.bg.muted,
  "panelSectionHeader.foreground": palette.text.default,
  // "panelSectionHeader.border": "",

  // Status bar
  "statusBar.background": palette.bg.deep,
  "statusBar.foreground": palette.text.default,
  // "statusBar.border": palette.border.muted,
  "statusBar.debuggingBackground": palette.accent[8],
  "statusBar.debuggingForeground": palette.text.deep,
  // "statusBar.debuggingBorder": "",
  "statusBar.noFolderBackground": palette.bg.deep,
  "statusBar.noFolderForeground": palette.text.deep,
  // "statusBar.noFolderBorder": "",

  "statusBarItem.activeBackground": palette.bg.active,
  "statusBarItem.hoverBackground": palette.bg.hovered,
  "statusBarItem.prominentForeground": palette.text.deep,
  "statusBarItem.prominentBackground": palette.accent[8],
  "statusBarItem.prominentHoverBackground": palette.accent[9],
  "statusBarItem.remoteBackground": palette.accent[12],
  "statusBarItem.remoteForeground": palette.text.badge,
  "statusBarItem.remoteHoverBackground": palette.accent[8],
  "statusBarItem.remoteHoverForeground": palette.text.badge,
  "statusBarItem.errorBackground": palette.status.error[8],
  "statusBarItem.errorForeground": palette.text.deep,
  "statusBarItem.errorHoverBackground": palette.status.error[9],
  "statusBarItem.errorHoverForeground": palette.text.deep,
  "statusBarItem.warningBackground": palette.status.warning[8],
  "statusBarItem.warningForeground": palette.text.deep,
  "statusBarItem.warningHoverBackground": palette.status.warning[9],
  "statusBarItem.warningHoverForeground": palette.text.deep,
  // "statusBarItem.compactHoverBackground": "",
  "statusBarItem.focusBorder": palette.bg.active,
  "statusBar.focusBorder": palette.border.default,
  "statusBarItem.offlineBackground": palette.bg.muted,
  "statusBarItem.offlineForeground": palette.text.muted,
  "statusBarItem.offlineHoverForeground": palette.bg.hovered,
  "statusBarItem.offlineHoverBackground": palette.text.muted,

  // Title bar
  "titleBar.activeBackground": palette.bg.deep,
  "titleBar.activeForeground": palette.text.default,
  "titleBar.inactiveBackground": palette.bg.muted,
  "titleBar.inactiveForeground": palette.text.muted,
  "titleBar.border": palette.border.default,

  // Menu bar
  // "menubar.selectionForeground": palette.test.testA,
  // "menubar.selectionBackground": palette.test.testA,
  // "menubar.selectionBorder": palette.test.testA,
  // "menu.background": palette.test.testA,
  // "menu.foreground": palette.test.testA,
  // "menu.selectionBackground": palette.test.testA,
  // "menu.selectionForeground": palette.test.testA,
  // "menu.selectionBorder": palette.test.testA,
  // "menu.separatorBackground": palette.test.testA,

  // Command center
  "commandCenter.foreground": palette.text.default,
  "commandCenter.activeForeground": palette.text.deep,
  "commandCenter.background": palette.bg.deep,
  "commandCenter.activeBackground": palette.bg.muted,
  "commandCenter.border": palette.border.default,
  "commandCenter.inactiveForeground": palette.text.muted,
  "commandCenter.inactiveBorder": palette.border.muted,
  "commandCenter.activeBorder": palette.border.active,

  // Notification
  "notificationCenter.border": palette.border.default,
  "notificationCenterHeader.foreground": palette.text.deep,
  "notificationCenterHeader.background": palette.bg.hovered,
  "notificationToast.border": palette.border.default,
  "notifications.foreground": palette.text.default,
  "notifications.background": palette.bg.default,
  "notifications.border": palette.border.default,
  "notificationLink.foreground": palette.status.info[11],
  "notificationsErrorIcon.foreground": palette.status.error[12],
  "notificationsWarningIcon.foreground": palette.status.warning[12],
  "notificationsInfoIcon.foreground": palette.status.info[12],

  // Banner
  "banner.background": palette.accent[5],
  "banner.foreground": palette.text.deep,
  "banner.iconForeground": palette.accent[12],

  // Extensions
  "extensionButton.prominentForeground": palette.text.badge,
  "extensionButton.prominentBackground": palette.accent[11],
  "extensionButton.prominentHoverBackground": palette.accent[12],
  "extensionButton.foreground": palette.text.badge,
  "extensionButton.background": palette.accent[11],
  "extensionButton.hoverBackground": palette.accent[12],
  "extensionButton.separator": palette.border.active,
  "extensionBadge.remoteBackground": palette.accent[11],
  "extensionBadge.remoteForeground": palette.text.badge,
  "extensionIcon.starForeground": palette.status.warning[11],
  "extensionIcon.verifiedForeground": palette.status.info[11],
  "extensionIcon.preReleaseForeground": palette.status.success[11],
  "extensionIcon.sponsorForeground": palette.status.hint[11],

  // Quick pinker
  "pickerGroup.border": palette.border.default,
  "pickerGroup.foreground": palette.text.default,
  "quickInput.background": palette.bg.default,
  "quickInput.foreground": palette.text.default,
  "quickInputList.focusBackground": palette.bg.active,
  "quickInputList.focusForeground": palette.accent[12],
  "quickInputList.focusIconForeground": palette.accent[12],
  "quickInputTitle.background": palette.bg.active,

  // Keybinding label
  "keybindingLabel.background": palette.bg.active,
  "keybindingLabel.foreground": palette.text.deep,
  "keybindingLabel.border": palette.border.default,
  "keybindingLabel.bottomBorder": palette.text.muted,

  // Keyboard shortcut table
  "keybindingTable.headerBackground": palette.bg.muted,
  "keybindingTable.rowsBackground": palette.bg.default,

  // Integrated terminal
  "terminal.background": palette.bg.deep,
  "terminal.border": palette.border.default,
  "terminal.foreground": palette.text.default,
  "terminal.selectionBackground": palette.primaryA[5],
  // "terminal.selectionForeground": palette.text.deep,
  "terminal.inactiveSelectionBackground": palette.primaryA[4],
  "terminal.findMatchBackground": palette.status.match[7],
  // "terminal.findMatchBorder": palette.border.default,
  "terminal.findMatchHighlightBackground": palette.status.matchA[5],
  // "terminal.findMatchHighlightBorder": palette.border.active,
  "terminal.hoverHighlightBackground": palette.primaryA[7],
  "terminal.dropBackground": palette.accentA[8],
  "terminal.tab.activeBorder": palette.accent[12],

  "terminalCommandDecoration.defaultBackground": palette.primary[8],
  "terminalCommandDecoration.successBackground": palette.status.success[8],
  "terminalCommandDecoration.errorBackground": palette.status.error[8],

  "terminalOverviewRuler.cursorForeground": palette.accent[12],
  "terminalOverviewRuler.findMatchForeground": palette.status.matchA[9],

  // "terminalCursor.background": "",
  "terminalCursor.foreground": palette.accent[12],

  "terminal.ansiWhite": palette.text.default,
  "terminal.ansiBlack": "#000",
  "terminal.ansiBlue": palette.general.blue,
  "terminal.ansiCyan": palette.general.cyan,
  "terminal.ansiGreen": palette.general.green,
  "terminal.ansiMagenta": palette.general.plum,
  "terminal.ansiRed": palette.general.crimson,
  "terminal.ansiYellow": palette.general.amber,
  "terminal.ansiBrightWhite": "#fff",
  "terminal.ansiBrightBlack": palette.bg.default,
  "terminal.ansiBrightBlue": palette.general.sky,
  "terminal.ansiBrightCyan": palette.general.teal,
  "terminal.ansiBrightGreen": palette.general.grass,
  "terminal.ansiBrightMagenta": palette.general.pink,
  "terminal.ansiBrightRed": palette.general.red,
  "terminal.ansiBrightYellow": palette.general.yellow,

  // Debug
  "debugToolBar.background": palette.bg.active,
  "debugToolBar.border": palette.border.active,
  // "editor.stackFrameHighlightBackground": "",
  // "editor.focusedStackFrameHighlightBackground": "",
  // "editor.inlineValuesForeground": "",
  // "editor.inlineValuesBackground": "",
  // "debugView.exceptionLabelForeground": "",
  // "debugView.exceptionLabelBackground": "",
  // "debugView.stateLabelForeground": "",
  // "debugView.stateLabelBackground": "",
  // "debugView.valueChangedHighlight": "",
  // "debugTokenExpression.name": "",
  // "debugTokenExpression.value": "",
  // "debugTokenExpression.string": "",
  // "debugTokenExpression.boolean": "",
  // "debugTokenExpression.number": "",
  // "debugTokenExpression.error": "",

  // Test
  // "testing.iconFailed": palette.status.error[11],
  // "testing.iconErrored": palette.status.error[11],
  // "testing.iconPassed": palette.status.success[11],
  // "testing.runAction": palette.status.info[12],
  // "testing.iconQueued": "",
  // "testing.iconUnset": "",
  // "testing.iconSkipped": "",
  // "testing.peekBorder": "",
  // "testing.peekHeaderBackground": "",
  // "testing.message.error.decorationForeground": "",
  // "testing.message.error.lineBackground": "",
  // "testing.message.info.decorationForeground": "",
  // "testing.message.info.lineBackground": "",

  // Welcome page
  "welcomePage.background": palette.bg.deep,
  // "welcomePage.progress.background": "",
  "welcomePage.progress.foreground": palette.accent[12],
  "welcomePage.tileBackground": palette.bg.muted,
  "welcomePage.tileHoverBackground": palette.bg.active,
  "welcomePage.tileBorder": palette.border.default,
  "walkThrough.embeddedEditorBackground": palette.bg.default,
  "walkthrough.stepTitle.foreground": palette.text.deep,

  // Git
  "gitDecoration.untrackedResourceForeground": palette.git.added[11],
  "gitDecoration.addedResourceForeground": palette.git.added[12],
  "gitDecoration.modifiedResourceForeground": palette.git.modified[11],
  "gitDecoration.stageModifiedResourceForeground": palette.git.modified[12],
  "gitDecoration.deletedResourceForeground": palette.git.deleted[11],
  "gitDecoration.stageDeletedResourceForeground": palette.git.deleted[12],
  "gitDecoration.renamedResourceForeground": palette.git.renamed[12],
  "gitDecoration.conflictingResourceForeground": palette.git.conflicting[11],
  "gitDecoration.submoduleResourceForeground": palette.git.submodule[12],
  "gitDecoration.ignoredResourceForeground": palette.primaryA[8],

  // Setting editor
  "settings.headerForeground": palette.text.deep,
  "settings.modifiedItemIndicator": palette.accent[12],
  // "settings.dropdownBackground": palette.bg.active,
  // "settings.dropdownForeground": palette.text.deep,
  // "settings.dropdownBorder": palette.border.active,
  // "settings.dropdownListBorder": palette.border.default,
  // "settings.checkboxBackground": palette.bg.deep,
  // "settings.checkboxForeground": palette.text.deep,
  // "settings.checkboxBorder": palette.text.deep,
  "settings.rowHoverBackground": palette.bg.default,
  // "settings.textInputBackground": palette.bg.deep,
  // "settings.textInputForeground": palette.text.default,
  // "settings.textInputBorder": palette.border.active,
  // "settings.numberInputBackground": palette.bg.deep,
  // "settings.numberInputForeground": palette.text.default,
  // "settings.numberInputBorder": palette.border.active,
  "settings.focusedRowBackground": palette.bg.muted,
  "settings.focusedRowBorder": palette.border.muted,
  "settings.headerBorder": palette.border.default,
  "settings.sashBorder": palette.border.default,
  "settings.settingsHeaderHoverForeground": palette.text.deep,

  // Breadcrumbs
  "breadcrumb.foreground": palette.text.muted,
  "breadcrumb.background": palette.bg.deep,
  "breadcrumb.focusForeground": palette.text.default,
  "breadcrumb.activeSelectionForeground": palette.text.deep,
  "breadcrumbPicker.background": palette.bg.default,

  // Snippet
  "editor.snippetTabstopHighlightBackground": palette.primaryA[5],
  // "editor.snippetTabstopHighlightBorder": "",
  "editor.snippetFinalTabstopHighlightBackground": palette.primaryA[5],
  // "editor.snippetFinalTabstopHighlightBorder": "",

  // Symbol icons
  // "symbolIcon.arrayForeground": "",
  // "symbolIcon.booleanForeground": "",
  // "symbolIcon.classForeground": "",
  // "symbolIcon.colorForeground": "",
  // "symbolIcon.constantForeground": "",
  // "symbolIcon.constructorForeground": "",
  // "symbolIcon.enumeratorForeground": "",
  // "symbolIcon.enumeratorMemberForeground": "",
  // "symbolIcon.eventForeground": "",
  // "symbolIcon.fieldForeground": "",
  // "symbolIcon.fileForeground": "",
  // "symbolIcon.folderForeground": "",
  // "symbolIcon.functionForeground": "",
  // "symbolIcon.interfaceForeground": "",
  // "symbolIcon.keyForeground": "",
  // "symbolIcon.keywordForeground": "",
  // "symbolIcon.methodForeground": "",
  // "symbolIcon.moduleForeground": "",
  // "symbolIcon.namespaceForeground": "",
  // "symbolIcon.nullForeground": "",
  // "symbolIcon.numberForeground": "",
  // "symbolIcon.objectForeground": "",
  // "symbolIcon.operatorForeground": "",
  // "symbolIcon.packageForeground": "",
  // "symbolIcon.propertyForeground": "",
  // "symbolIcon.referenceForeground": "",
  // "symbolIcon.snippetForeground": "",
  // "symbolIcon.stringForeground": "",
  // "symbolIcon.structForeground": "",
  // "symbolIcon.textForeground": "",
  // "symbolIcon.typeParameterForeground": "",
  // "symbolIcon.unitForeground": "",
  // "symbolIcon.variableForeground": "",

  // Debug icons
  // "debugIcon.breakpointForeground": "",
  // "debugIcon.breakpointDisabledForeground": "",
  // "debugIcon.breakpointUnverifiedForeground": "",
  // "debugIcon.breakpointCurrentStackframeForeground": "",
  // "debugIcon.breakpointStackframeForeground": "",
  // "debugIcon.startForeground": "",
  // "debugIcon.pauseForeground": "",
  // "debugIcon.stopForeground": "",
  // "debugIcon.disconnectForeground": "",
  // "debugIcon.restartForeground": "",
  // "debugIcon.stepOverForeground": "",
  // "debugIcon.stepIntoForeground": "",
  // "debugIcon.stepOutForeground": "",
  // "debugIcon.continueForeground": "",
  // "debugIcon.stepBackForeground": "",
  // "debugConsole.infoForeground": "",
  // "debugConsole.warningForeground": "",
  // "debugConsole.errorForeground": "",
  // "debugConsole.sourceForeground": "",
  // "debugConsoleInputIcon.foreground": "",

  // Notebook
  // "notebook.editorBackground": "",
  // "notebook.cellBorderColor": "",
  // "notebook.cellHoverBackground": "",
  // "notebook.cellInsertionIndicator": "",
  // "notebook.cellStatusBarItemHoverBackground": "",
  // "notebook.cellToolbarSeparator": "",
  // "notebook.cellEditorBackground": "",
  // "notebook.focusedCellBackground": "",
  // "notebook.focusedCellBorder": "",
  // "notebook.focusedEditorBorder": "",
  // "notebook.inactiveFocusedCellBorder": "",
  // "notebook.inactiveSelectedCellBorder": "",
  // "notebook.outputContainerBackgroundColor": "",
  // "notebook.outputContainerBorderColor": "",
  // "notebook.selectedCellBackground": "",
  // "notebook.selectedCellBorder": "",
  // "notebook.symbolHighlightBackground": "",
  // "notebookScrollbarSlider.activeBackground": "",
  // "notebookScrollbarSlider.background": "",
  // "notebookScrollbarSlider.hoverBackground": "",
  // "notebookStatusErrorIcon.foreground": "",
  // "notebookStatusRunningIcon.foreground": "",
  // "notebookStatusSuccessIcon.foreground": "",
  // "notebookEditorOverviewRuler.runningCellForeground": "",

  // Charts
  // "charts.foreground": "",
  // "charts.lines": palette.text.deep,
  // "charts.red": palette.general.ruby,
  // "charts.blue": palette.general.iris,
  // "charts.yellow": palette.general.yellow,
  // "charts.orange": palette.general.orange,
  // "charts.green": palette.general.green,
  // "charts.purple": palette.general.plum,

  // Ports
  // "ports.iconRunningProcessForeground": "",

  // Comments view
  // "commentsView.resolvedIcon": "",
  // "commentsView.unresolvedIcon": "",

  // Extension
  ...extensionColors(palette),
});
